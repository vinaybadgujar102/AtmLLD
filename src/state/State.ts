import { AtmState } from "../enums/ATMState";
import { Card } from "../models/Card";

export interface State {
  initTransaction(): number;
  readCardDetailsAndPin(card: Card): boolean;
  dispenseCash(transactionId: number): number;
  ejectCard(): void;
  readCashWithdrawalDetails(transactionId: number, amount: number): number;
  getState(): AtmState;
}
