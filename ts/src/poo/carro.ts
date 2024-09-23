export default abstract class Carro {
    constructor(
        private readonly velocidadeMaxima: number = 220,
        private readonly aceleracao = 5,
        private readonly frenagem = 5,
        protected velocidadeAtual: number = 0,
    ) {}

    get velocidade(): number {
        return this.velocidadeAtual;
    }

    acelerar(): number {
        const novaVelocidade = this.velocidadeAtual + this.aceleracao;
        this.velocidadeAtual = novaVelocidade <= this.velocidadeMaxima ? novaVelocidade : this.velocidadeMaxima;
        return this.velocidadeAtual;
    }

    frear(): number {
        const novaVelocidade = this.velocidadeAtual - this.frenagem;
        this.velocidadeAtual = novaVelocidade >= 0 ? novaVelocidade : 0;
        return this.velocidadeAtual;
    }
}

class Civic extends Carro {
    constructor() {
        super(230, 10, 5);
    }
}

interface Esportivo {
    ligarTurbo(): void;
    desligarTurbo(): void;
}

class Ferrari extends Carro implements Esportivo {
    private turbo = false;

    constructor() {
        super(350, 20, 15);
    }

    ligarTurbo(): void {
        this.turbo = true;
    }

    desligarTurbo(): void {
        this.turbo = false;
    }

    acelerar(): number {
        if (this.turbo) {
            super.acelerar();
            return super.acelerar();
        } else {
            return super.acelerar();
        }
    }
}

let meuCarro: Carro = new Civic();
meuCarro.acelerar();
meuCarro.acelerar();
meuCarro.acelerar();
console.log('Civic:', meuCarro.velocidade);

meuCarro = new Ferrari();
(meuCarro as Ferrari).ligarTurbo();
meuCarro.acelerar();
meuCarro.acelerar();
meuCarro.acelerar();

console.log('Ferrari:', meuCarro.velocidade);

meuCarro.frear();
meuCarro.frear();

console.log('Ferrari:', meuCarro.velocidade);
