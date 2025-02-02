import { AtmState } from "../enums/ATMState";
import { CardManagerFactory } from "../factories/CardManagerFactory";
import { ATM } from "../models/ATM";
import { Card } from "../models/Card";
import { DispensingCashState } from "./DispensingCashState";
import { ReadyForTransactionState } from "./ReadyForTransactionState";
import { State } from "./State";

export class ReadingCashWithdrawalDetails implements State {
  private atm: ATM;
  constructor(atm: ATM) {
    this.atm = atm;
  }
  initTransaction(): number {
    throw new Error("Cannot init transaction while reading");
  }
  readCardDetailsAndPin(card: Card, pin: string): boolean {
    throw new Error("Cannot read card details and pin while reading");
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
    const cardManager = CardManagerFactory.getCardManager(card.getCardType());
    if (!cardManager) {
      throw new Error("Invalid card type");
    }
    const isWithdrawalAmountValid = cardManager?.withdrawalValidation(
      card,
      amount
    );
    if (isWithdrawalAmountValid) {
      this.atm.changeState(new DispensingCashState(this.atm));
    } else {
      this.atm.changeState(new ReadyForTransactionState(this.atm));
    }
    return isWithdrawalAmountValid ?? false;
  }

  cancelTransaction(card: Card, transactionId: number): boolean {
    this.atm.changeState(new ReadyForTransactionState(this.atm));
    return true;
  }
  getState(): AtmState {
    return AtmState.READING_CASH_WITHDRAWAL_DETAILS;
  }
}
