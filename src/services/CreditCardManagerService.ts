import { Card } from "../models/Card";
import { CardManagerService } from "./CardManagerService";

export class CreditCardManagerService implements CardManagerService {
  validateCard(card: Card, pin: string): boolean {
    return true;
  }
  withdrawalValidation(card: Card, amount: number): boolean {
    return true;
  }
  doTransaction(card: Card, amount: number, transactionId: number): boolean {
    return true;
  }
}
