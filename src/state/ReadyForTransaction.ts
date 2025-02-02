import { BackendAPI } from "../api/BackendAPI";
import { NodeBackendAPI } from "../api/NodeBackendAPI";
import { CreateTransactionDTO } from "../dtos/CreateTransactioDTO";
import { AtmState } from "../enums/ATMState";
import { ATM } from "../models/ATM";
import { Card } from "../models/Card";
import { State } from "./State";

export class ReadyForTransaction implements State {
  private atm: ATM;
  private backendAPI: BackendAPI;

  constructor(atm: ATM, backendAPI: BackendAPI) {
    this.atm = atm;
    this.backendAPI = backendAPI;
  }

  initTransaction(): number {
    const createTransactionDTO = new CreateTransactionDTO(this.atm.getAtmId());

    const transactionId =
      this.backendAPI.createTransaction(createTransactionDTO);

    if (transactionId === 0) {
      throw new Error("Failed to create transaction");
    }
    return transactionId;
  }
  readCardDetailsAndPin(card: Card): boolean {
    throw new Error("Cannot read card details and pin as no card is present");
  }
  dispenseCash(transactionId: number): number {
    throw new Error("Cannot dispense cash as no card is present");
  }
  ejectCard(): void {
    throw new Error("Canont eject card as no card is present");
  }
  readCashWithdrawalDetails(transactionId: number, amount: number): number {
    throw new Error(
      "Cannot read cash withdrawal details without reading card details and pin"
    );
  }
  getState(): AtmState {
    return AtmState.READY_FOR_TRANSACTION;
  }
}
