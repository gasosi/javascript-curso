class Jogo {
    constructor() {
        this._escolhaJogador1 = null;
        this._escolhaJogador2 = null;
        this._mensagemResultado = '';
    }

    get escolhaJogador1() {
        return this._escolhaJogador1;
    }

    set escolhaJogador1(escolha) {
        this._escolhaJogador1 = escolha;
        this.verificarResultado();
    }

    get escolhaJogador2() {
        return this._escolhaJogador2;
    }

    set escolhaJogador2(escolha) {
        this._escolhaJogador2 = escolha;
        this.verificarResultado();
    }

    get mensagemResultado() {
        return this._mensagemResultado;
    }

    set mensagemResultado(mensagem) {
        this._mensagemResultado = mensagem;
        document.getElementById('mensagem-resultado').textContent = mensagem;
    }

    determinarVencedor(jogador1, jogador2) {
        if (jogador1 === jogador2) return 'Empate!';
        if (
            (jogador1 === 'pedra' && jogador2 === 'tesoura') ||
            (jogador1 === 'papel' && jogador2 === 'pedra') ||
            (jogador1 === 'tesoura' && jogador2 === 'papel')
        ) {
            return 'Jogador 1 ganhou!';
        } else {
            return 'Jogador 2 ganhou!';
        }
    }

    verificarResultado() {
        if (this._escolhaJogador1 && this._escolhaJogador2) {
            const resultado = this.determinarVencedor(this._escolhaJogador1, this._escolhaJogador2);
            this.mensagemResultado = `Jogador 1 escolheu ${this._escolhaJogador1}. Jogador 2 escolheu ${this._escolhaJogador2}. ${resultado}`;
            // Reinicia as escolhas após mostrar o resultado
            this._escolhaJogador1 = null;
            this._escolhaJogador2 = null;
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const jogo = new Jogo();

    document.querySelectorAll('.escolha').forEach(button => {
        button.addEventListener('click', (event) => {
            const escolha = event.target.dataset.escolha;
            const jogador = event.target.closest('.player-choice').querySelector('h2').textContent;

            if (jogador === 'Jogador 1') {
                jogo.escolhaJogador1 = escolha;
            } else if (jogador === 'Jogador 2') {
                jogo.escolhaJogador2 = escolha;
            }
        });
    });
});