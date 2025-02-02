import { CreateTransactionDTO } from "../dtos/CreateTransactioDTO";
import { UpdateATMStateDTO } from "../dtos/UpdateATMStateDTO";

export interface BackendAPI {
  createTransaction(createTransactionDTO: CreateTransactionDTO): number;

  updateState(updateATMStateDTO: UpdateATMStateDTO): boolean;
}
