import { Automovel } from "./Automovel";
import { Cambio } from "./Cambio";

export class Manual extends Automovel {
  private embreagem: boolean;

  constructor(cambio: Cambio, embreagem: boolean) {
    super(cambio);
    this.embreagem = embreagem;
  }

  public pisarNaEmbreagem() {
    console.log("O motorista pisou na embreagem");
  }

  public soltarEmbreagem() {
    console.log("O motorista soltou a embreagem");
  }

  public acelerar(rpm: number) {
    console.log(rpm);
  }
}

export default Manual;
