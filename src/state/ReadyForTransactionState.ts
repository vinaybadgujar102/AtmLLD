import { BackendAPI } from "../api/BackendAPI";
import { NodeBackendAPI } from "../api/NodeBackendAPI";
import { CreateTransactionDTO } from "../dtos/CreateTransactioDTO";
import { AtmState } from "../enums/ATMState";
import { ATM } from "../models/ATM";
import { Card } from "../models/Card";
import { ReadCardDetailsAndPinState } from "./ReadCardDetailsAndPinState";
import { State } from "./State";

export class ReadyForTransactionState implements State {
  private atm: ATM;
  private backendAPI: BackendAPI;

  constructor(atm: ATM) {
    this.atm = atm;
    this.backendAPI = new NodeBackendAPI();
  }

  initTransaction(): number {
    const createTransactionDTO = new CreateTransactionDTO(this.atm.getAtmId());

    const transactionId =
      this.backendAPI.createTransaction(createTransactionDTO);

    if (transactionId === 0) {
      throw new Error("Failed to create transaction");
    }

    this.atm.changeState(new ReadCardDetailsAndPinState(this.atm));
    return transactionId;
  }
  readCardDetailsAndPin(card: Card, pin: string): boolean {
    throw new Error("Cannot read card details and pin as no card is present");
  }
  dispenseCash(card: Card, amount: number, transactionId: number): number {
    throw new Error("Cannot dispense cash as no card is present");
  }
  ejectCard(): void {
    throw new Error("Canont eject card as no card is present");
  }
  readCashWithdrawalDetails(
    card: Card,
    transactionId: number,
    amount: number
  ): boolean {
    throw new Error(
      "Cannot read cash withdrawal details without reading card details and pin"
    );
  }
  cancelTransaction(card: Card, transactionId: number): boolean {
    throw new Error("Cannot cancel transaction as no transaction is present");
  }
  getState(): AtmState {
    return AtmState.READY_FOR_TRANSACTION;
  }
}
