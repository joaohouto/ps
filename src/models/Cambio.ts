export class Cambio {
  private marcha: number;

  constructor() {
    this.marcha = 0;
  }

  public getMarcha() {
    return this.marcha;
  }

  public setMarcha(marcha: number) {
    this.marcha = marcha;
  }
}

export default Cambio;
