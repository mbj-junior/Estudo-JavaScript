import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo",11122233309);
const conta1 = new ContaCorrente();
conta1.cliente = cliente1;
conta1.agencia = 1001;

conta1.depositar(500);

const cliente2 = new Cliente("Alicia", 11122233309);
const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 102;

conta1.transferir(200, conta2);

console.log(conta1, conta2);
