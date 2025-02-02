import { BackendAPI } from "../api/BackendAPI";
import { NodeBackendAPI } from "../api/NodeBackendAPI";
import { GetATMAmountDTO } from "../dtos/GetATMAmountDTO";
import { ATM } from "../models/ATM";
import { CashDispenserService } from "./CashDispenserService";

export class CashDispenserServiceImple implements CashDispenserService {
  private backendAPI: BackendAPI;
  constructor() {
    this.backendAPI = new NodeBackendAPI();
  }

  dispenseCash(atm: ATM, amount: number): boolean {
    const getATMAmountDTO = new GetATMAmountDTO(atm.getAtmId());
    const atmAmount = this.backendAPI.getAtmAmount(getATMAmountDTO);

    if (atmAmount < amount) {
      throw new Error("Insufficient funds");
    }

    console.log(`Dispensing ${amount} from ${atm.getAtmId()}`);
    return true;
  }
}
