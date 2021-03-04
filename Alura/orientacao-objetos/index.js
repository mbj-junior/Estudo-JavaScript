import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo",11122233309);
const conta1 = new ContaCorrente(cliente1, 10123);

const cliente2 = new Cliente("Alicia", 11122233309);
const conta2 = new ContaCorrente(cliente2,102);

conta1.depositar(500);
conta1.transferir(200, conta2);

console.log(conta1);
console.log(conta2);
