import { CardType } from "../enums/CardType";

export class Card {
  private cardNumber: string;
  private pin: string;
  private name: string;
  private cardType: CardType;
  private bankName: string;

  constructor(
    cardNumber: string,
    pin: string,
    name: string,
    cardType: CardType,
    bankName: string
  ) {
    this.cardNumber = cardNumber;
    this.pin = pin;
    this.name = name;
    this.cardType = cardType;
    this.bankName = bankName;
  }

  public getCardNumber(): string {
    return this.cardNumber;
  }

  public getPin(): string {
    return this.pin;
  }

  public getName(): string {
    return this.name;
  }

  public getBankName(): string {
    return this.bankName;
  }

  public getCardType(): CardType {
    return this.cardType;
  }

  public toString(): string {
    return (
      "Card Number: " +
      this.cardNumber +
      "\nPin: " +
      this.pin +
      "\nName: " +
      this.name +
      "\nBank Name: " +
      this.bankName +
      "\nCard Type: " +
      this.cardType
    );
  }
}
