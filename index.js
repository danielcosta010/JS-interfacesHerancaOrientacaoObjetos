import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Daniel", 11122233309);
const cliente2 = new Cliente("Isabella", 88822233309);


const contaCorrenteDaniel = new ContaCorrente(1001, cliente1);
contaCorrenteDaniel.depositar(500);
contaCorrenteDaniel.sacar(100);

const conta2 = new ContaCorrente(102, cliente2);

let valor = 200;
contaCorrenteDaniel.tranferir(valor, conta2);

console.log(contaCorrenteDaniel);