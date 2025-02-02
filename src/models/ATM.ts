import { BackendAPI } from "../api/BackendAPI";
import { NodeBackendAPI } from "../api/NodeBackendAPI";
import { UpdateATMStateDTO } from "../dtos/UpdateATMStateDTO";
import { AtmState } from "../enums/ATMState";
import { ReadyForTransactionState } from "../state/ReadyForTransactionState";
import { State } from "../state/State";

export class ATM {
  private atmId: string;
  private state: State;
  private backendAPI: BackendAPI;
  constructor(atmId: string) {
    this.atmId = atmId;
    this.backendAPI = new NodeBackendAPI();
    this.state = new ReadyForTransactionState(this, this.backendAPI);
  }

  public getAtmId(): string {
    return this.atmId;
  }

  public getState(): AtmState {
    return this.state.getState();
  }

  public changeState(newState: State): void {
    this.state = newState;
    // now call the server to update the state
    this.backendAPI.updateState(
      new UpdateATMStateDTO(this.atmId, newState.getState())
    );
  }
}
