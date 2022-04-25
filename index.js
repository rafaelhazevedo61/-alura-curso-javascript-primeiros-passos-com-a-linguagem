class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    _saldo = 0;

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {
        if (valor <= 0)  return;
/*         if (valor <= 0) {
            return;
        } */
        this._saldo += valor;

    }
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Ricardo";
cliente1.cpf = 11122233301;
cliente1.agencia = 1001;
cliente1.saldo = 0;

cliente2.nome = "Alice";
cliente2.cpf = 11122233302;
cliente2.agencia = 1001;
cliente2.saldo = 0;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);

const valorSacado = contaCorrenteRicardo.sacar(50);
console.log(valorSacado);

console.log(contaCorrenteRicardo);