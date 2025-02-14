import { BackendAPI } from "../api/BackendAPI";
import { AtmState } from "../enums/ATMState";
import { CardManagerFactory } from "../factories/CardManagerFactory";
import { ATM } from "../models/ATM";
import { Card } from "../models/Card";
import { ReadingCashWithdrawalDetails } from "./ReadingCashWithdrawalDetails";
import { ReadyForTransactionState } from "./ReadyForTransactionState";
import { State } from "./State";

export class ReadCardDetailsAndPinState implements State {
  private atm: ATM;
  constructor(atm: ATM) {
    this.atm = atm;
  }

  initTransaction(): number {
    throw new Error("Cannot init transaction while reading");
  }
  readCardDetailsAndPin(card: Card): boolean {
    let cardManager = CardManagerFactory.getCardManager(card.getCardType());
    const isCardValid = cardManager?.validateCard(card, card.getPin());
    if (isCardValid) {
      this.atm.changeState(new ReadingCashWithdrawalDetails(this.atm));
    } else {
      this.atm.changeState(new ReadyForTransactionState(this.atm));
    }
    return isCardValid ?? false;
  }
  dispenseCash(card: Card, amount: number, transactionId: number): number {
    throw new Error("Cannot dispense cash while reading");
  }
  ejectCard(): void {
    throw new Error("Cannot eject card while reading");
  }
  readCashWithdrawalDetails(
    card: Card,
    transactionId: number,
    amount: number
  ): boolean {
    throw new Error("Cannot read cash withdrawal details while reading");
  }
  cancelTransaction(card: Card, transactionId: number): boolean {
    this.atm.changeState(new ReadyForTransactionState(this.atm));
    return true;
  }
  getState(): AtmState {
    return AtmState.READ_CARD_DETAILS_AND_PIN;
  }
}
