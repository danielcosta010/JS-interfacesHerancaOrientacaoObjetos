import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { ContaSalario } from "./ContaSalario.js";

const cliente1 = new Cliente("Daniel", 11122233309);



const contaCorrenteDaniel = new ContaCorrente (cliente1, 1001);
contaCorrenteDaniel.depositar(500);
contaCorrenteDaniel.sacar(100);

const contaPoupanca = new ContaPoupanca (100, cliente1, 1001);
contaPoupanca.sacar(10);

const contaSalario = new ContaSalario(cliente1);
contaSalario.depositar(100);
contaSalario.sacar(10)


console.log(contaPoupanca);

console.log(contaCorrenteDaniel);

console.log(contaSalario);
