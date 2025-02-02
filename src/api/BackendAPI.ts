import { CreateTransactionDTO } from "../dtos/CreateTransactioDTO";

export interface BackendAPI {
  createTransaction(createTransactionDTO: CreateTransactionDTO): number;
}
