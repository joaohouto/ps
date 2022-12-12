import { Cambio } from "./Cambio";

export class Automovel {
  private cambio: Cambio;

  constructor(cambio: Cambio) {
    this.cambio = cambio;
  }

  public aumentarMarcha() {
    const proxMarcha = this.cambio.getMarcha() + 1;
    this.cambio.setMarcha(proxMarcha);

    console.log("Mudou para marcha " + this.cambio.getMarcha());
  }
}
