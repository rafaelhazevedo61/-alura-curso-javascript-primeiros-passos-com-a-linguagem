class cliente {
    nome;
    cpf;
    agencia;
    saldo;
    rg;
}

const cliente1 = new cliente();
const cliente2 = new cliente();

cliente1.nome = "Ricardo";
cliente1.cpf = 11122233301;
cliente1.agencia = 1001;
cliente1.saldo = 0;

cliente2.nome = "Alice";
cliente2.cpf = 11122233302;
cliente2.agencia = 1001;
cliente2.saldo = 0;

const cliente3Nome = "Alice";
const cliente3CPF = 11122233302;
const cliente3Agencia = 1001;
const cliente3Saldo = 0;

console.log(cliente1, cliente2);