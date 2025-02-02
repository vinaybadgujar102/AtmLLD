import { AtmState } from "../enums/ATMState";
import { State } from "../state/State";

export class UpdateATMStateDTO {
  private atmId: string;
  private atmState: AtmState;
  constructor(atmId: string, atmState: AtmState) {
    this.atmId = atmId;
    this.atmState = atmState;
  }

  public getAtmId(): string {
    return this.atmId;
  }

  public getAtmState(): AtmState {
    return this.atmState;
  }
}
