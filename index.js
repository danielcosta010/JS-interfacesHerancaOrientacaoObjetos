import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { Conta } from "./Conta.js";
const cliente1 = new Cliente("Daniel", 11122233309);



const contaCorrenteDaniel = new Conta(0, cliente1, 1001);
contaCorrenteDaniel.depositar(500);
contaCorrenteDaniel.sacar(100);

const contaPoupanca = new Conta(100, cliente1, 1001);

console.log(contaPoupanca);

console.log(contaCorrenteDaniel);