export class ATM {
  private atmId: string;

  constructor(atmId: string) {
    this.atmId = atmId;
  }

  public getAtmId(): string {
    return this.atmId;
  }
}
