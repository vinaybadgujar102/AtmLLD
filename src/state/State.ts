import { AtmState } from "../enums/ATMState";
import { Card } from "../models/Card";

export interface State {
  initTransaction(): number;
  readCardDetailsAndPin(card: Card, pin: string): boolean;
  dispenseCash(card: Card, amount: number, transactionId: number): number;
  ejectCard(): void;
  readCashWithdrawalDetails(
    card: Card,
    transactionId: number,
    amount: number
  ): boolean;
  cancelTransaction(card: Card, transactionId: number): boolean;
  getState(): AtmState;
}
