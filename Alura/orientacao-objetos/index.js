class Cliente {
  constructor() {
    this.nome;
    this.cpf;
  }
}

class Saldo {
  constructor() {
    this.agencia;
    this.saldo;
  }

  sacar(valor) {
    if (this.saldo >= valor) {
      this.saldo -= valor;
    }
    console.log(this.nome, "seu saldo é de ", this.saldo)
  }
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

cliente2.nome = "Alicia";
cliente2.cpf = 11122233309;

console.log(cliente1);
console.log(cliente2);
