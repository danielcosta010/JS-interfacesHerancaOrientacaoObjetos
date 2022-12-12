import {Cliente} from "./Cliente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor ('Daniel', 15000, 12345678990);
diretor.cadastrarSenha('123456');
const gerente = new Gerente ('Polliana', 7000, 98765432188);
gerente.cadastrarSenha('654321');

const cliente = new Cliente ('Isabella', 345678900, 456)

const diretorEstaLogado = SistemaAutenticacao.login(diretor, 123456);
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, 654321);

const clienteEstaLogado = SistemaAutenticacao.login(cliente, 456);


console.log(diretorEstaLogado, gerenteEstaLogado, clienteEstaLogado);
console.log(gerenteEstaLogado);

/* import {ContaCorrente} from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";

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

console.log(ContaCorrente.numeroDeContas); */
