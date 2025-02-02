import { CreateTransactionDTO } from "../dtos/CreateTransactioDTO";
import { GetATMAmountDTO } from "../dtos/GetATMAmountDTO";
import { UpdateATMStateDTO } from "../dtos/UpdateATMStateDTO";

export interface BackendAPI {
  createTransaction(createTransactionDTO: CreateTransactionDTO): number;

  updateState(updateATMStateDTO: UpdateATMStateDTO): boolean;

  getAtmAmount(getATMAmountDTO: GetATMAmountDTO): number;
}
