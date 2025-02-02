import { CardType } from "../enums/CardType";
import { CardManagerService } from "../services/CardManagerService";
import { CreditCardManagerService } from "../services/CreditCardManagerService";
import { DebitCardManagerService } from "../services/DebitCardManagerService";

export class CardManagerFactory {
  static getCardManager(cardType: CardType): CardManagerService | null {
    let cardManagerService: CardManagerService | null = null;
    if (cardType === CardType.CREDIT) {
      cardManagerService = new CreditCardManagerService();
    } else if (cardType === CardType.DEBIT) {
      cardManagerService = new DebitCardManagerService();
    }
    return cardManagerService;
  }
}
