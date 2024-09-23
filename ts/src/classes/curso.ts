class Curso {
    constructor(readonly id: number, public nome: string, public duracaoEmSegundos: number) {}

    duracaoEmHM(): string {
        const horas = Math.floor(this.duracaoEmSegundos / 3600);
        const minutos = Math.floor((this.duracaoEmSegundos % 3600) / 60);
        return `${horas}h ${minutos}m`;
    }
}

const curso = new Curso(1, 'TypeScript', 78467);
console.log(curso);
console.log(curso.nome);
console.log(curso.duracaoEmHM());
