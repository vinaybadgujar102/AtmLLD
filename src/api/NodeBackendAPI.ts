import { CreateTransactionDTO } from "../dtos/CreateTransactioDTO";
import { BackendAPI } from "./BackendAPI";

export class NodeBackendAPI implements BackendAPI {
  // should be only responsible for connecting to backend and returning the response

  public createTransaction(createTransactionDTO: CreateTransactionDTO): number {
    // 1. validations

    // 2. connect to backend

    // 3. return response
    return Math.floor(Math.random() * 1000);
  }
}
