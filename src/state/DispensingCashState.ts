import { AtmState } from "../enums/ATMState";
import { CardManagerFactory } from "../factories/CardManagerFactory";
import { ATM } from "../models/ATM";
import { Card } from "../models/Card";
import { CashDispenserService } from "../services/CashDispenserService";
import { CashDispenserServiceImple } from "../services/CashDispenserServiceImple";
import { EjectCardState } from "./EjectCardState";
import { ReadyForTransactionState } from "./ReadyForTransactionState";
import { State } from "./State";

export class DispensingCashState implements State {
  private atm: ATM;
  private cashDispenserService: CashDispenserService;
  constructor(atm: ATM) {
    this.atm = atm;
    this.cashDispenserService = new CashDispenserServiceImple();
  }
  initTransaction(): number {
    throw new Error("Cannot init transaction while dispensing cash");
  }
  readCardDetailsAndPin(card: Card, pin: string): boolean {
    throw new Error("Cannot read card details and pin while dispensing cash");
  }
  dispenseCash(card: Card, amount: number, transactionId: number): number {
    let manager = CardManagerFactory.getCardManager(card.getCardType());
    if (!manager) {
      throw new Error("Invalid card type");
    }
    const isTransactionSuccessful = manager.doTransaction(
      card,
      transactionId,
      amount
    );
    if (isTransactionSuccessful) {
      this.cashDispenserService.dispenseCash(this.atm, amount);
      this.atm.changeState(new EjectCardState(this.atm));
    } else {
      console.log("Transaction failed");
      this.atm.changeState(new ReadyForTransactionState(this.atm));
    }
    return amount;
  }
  ejectCard(): void {
    throw new Error("Cannot eject card while dispensing cash");
  }
  readCashWithdrawalDetails(
    card: Card,
    transactionId: number,
    amount: number
  ): boolean {
    throw new Error(
      "Cannot read cash withdrawal details while dispensing cash"
    );
  }
  cancelTransaction(card: Card, transactionId: number): boolean {
    throw new Error("Cannot cancel transaction while dispensing cash");
  }
  getState(): AtmState {
    return AtmState.DISPENSING_CASH;
  }
}
