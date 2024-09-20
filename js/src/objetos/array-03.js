const pessoas = [
    { nomeCompleto: 'Lucas Silva' },
    { nomeCompleto: 'Ana Paula' },
    { nomeCompleto: 'Pedro Santos' },
    { nomeCompleto: 'Maria Oliveira' },
];

const primeirosNomes = pessoas.map((pessoa) => pessoa.nomeCompleto.split(' ')[0]);

console.log(primeirosNomes);
