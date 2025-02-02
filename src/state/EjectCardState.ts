import { AtmState } from "../enums/ATMState";
import { ATM } from "../models/ATM";
import { Card } from "../models/Card";
import { ReadyForTransactionState } from "./ReadyForTransactionState";
import { State } from "./State";

export class EjectCardState implements State {
  private atm: ATM;
  constructor(atm: ATM) {
    this.atm = atm;
  }
  initTransaction(): number {
    throw new Error("Cannot init transaction while ejecting card");
  }
  readCardDetailsAndPin(card: Card, pin: string): boolean {
    throw new Error("Cannot read card details and pin while ejecting card");
  }
  dispenseCash(card: Card, amount: number, transactionId: number): number {
    throw new Error("Cannot dispense cash while ejecting card");
  }
  ejectCard(): void {
    console.log("Ejecting card");
    this.atm.changeState(new ReadyForTransactionState(this.atm));
  }
  readCashWithdrawalDetails(
    card: Card,
    transactionId: number,
    amount: number
  ): boolean {
    throw new Error("Cannot read cash withdrawal details while ejecting card");
  }
  cancelTransaction(card: Card, transactionId: number): boolean {
    throw new Error("Cannot cancel transaction while ejecting card");
  }
  getState(): AtmState {
    return AtmState.EJECTING_CARD;
  }
}
