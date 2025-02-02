import { CardType } from "../enums/CardType";
import { Card } from "./Card";
import { Debit } from "./Debit";
import { Visa } from "./Visa";

export class VisaDebitCard extends Card implements Visa, Debit {
  constructor(
    cardNumber: string,
    pin: string,
    name: string,
    cardType: CardType,
    bankName: string
  ) {
    super(cardNumber, pin, name, cardType, bankName);
  }
  makePinPayment(): void {
    this.connectToVisa();
    console.log("make pin payment");
  }
  connectToVisa(): void {
    console.log("connect to visa");
  }
}
