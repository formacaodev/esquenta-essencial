interface AulaProps {
    id: number;
    nome: string;
    duracaoEmSegundos: number;
}

class Aula {
    constructor(readonly props: AulaProps) {}

    get id(): number {
        return this.props.id;
    }

    get nome(): string {
        return this.props.nome;
    }

    get duracaoEmSegundos(): number {
        return this.props.duracaoEmSegundos;
    }

    duracaoEmHM(): string {
        const horas = Math.floor(this.duracaoEmSegundos / 3600);
        const minutos = Math.floor((this.duracaoEmSegundos % 3600) / 60);
        return `${horas}h ${minutos}m`;
    }
}

const aula = new Aula({
    id: 1,
    nome: 'Introdução ao TypeScript',
    duracaoEmSegundos: 6000,
});
console.log(aula.nome);
console.log(aula.duracaoEmHM());
console.log(aula.props);
