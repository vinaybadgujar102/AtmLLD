import { ATM } from "../models/ATM";

export interface CashDispenserService {
  dispenseCash(atm: ATM, amount: number): boolean;
}
