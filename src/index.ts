import { Cambio } from "./models/Cambio";
import { Manual } from "./models/Manual";

const novoCambio = new Cambio();
const carro = new Manual(novoCambio, true);

carro.pisarNaEmbreagem();
carro.aumentarMarcha();
carro.acelerar(100);
carro.soltarEmbreagem();
