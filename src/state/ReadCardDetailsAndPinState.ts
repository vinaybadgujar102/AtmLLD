import { AtmState } from "../enums/ATMState";
import { Card } from "../models/Card";
import { State } from "./State";

export class ReadCardDetailsAndPinState implements State {
  initTransaction(): number {
    throw new Error("Cannot init transaction while reading");
  }
  readCardDetailsAndPin(card: Card): boolean {
    return false;
  }
  dispenseCash(transactionId: number): number {
    throw new Error("Cannot dispense cash while reading");
  }
  ejectCard(): void {
    throw new Error("Cannot eject card while reading");
  }
  readCashWithdrawalDetails(transactionId: number, amount: number): number {
    throw new Error("Cannot read cash withdrawal details while reading");
  }
  getState(): AtmState {
    return AtmState.READ_CARD_DETAILS_AND_PIN;
  }
}
