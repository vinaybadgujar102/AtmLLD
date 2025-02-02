import { Card } from "../models/Card";

export interface CardManagerService {
  validateCard(card: Card, pin: string): boolean;

  withdrawalValidation(card: Card, amount: number): boolean;

  doTransaction(card: Card, amount: number, transactionId: number): boolean;
}
