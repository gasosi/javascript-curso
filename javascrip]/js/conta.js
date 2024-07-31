class Conta {constructor(){
    this.saldo = 0;
    deposita = function(valor){this.saldo = this.saldo + valor;}
}

deposita(valor){this.saldo =+valor; }

}

class Contapoupanca extends Conta {
    atualiza (indice){this.saldo = this.saldo * indice;}
}

var minhaconta = new Contapoupanca();

minhaconta.deposita(500);

minhaconta.saldo;

minhaconta.atualiza(0.05);

console.log(minhaconta.saldo);