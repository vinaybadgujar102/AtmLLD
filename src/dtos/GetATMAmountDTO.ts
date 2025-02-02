export class GetATMAmountDTO {
  private atmId: string;

  constructor(atmId: string) {
    this.atmId = atmId;
  }

  getAtmId(): string {
    return this.atmId;
  }
}
