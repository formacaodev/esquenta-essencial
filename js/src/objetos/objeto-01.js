const pessoa = {
    nome: 'Ana',
    idade: 28,
    cidade: 'Rio de Janeiro',
};

pessoa.nome = 'Maria';
pessoa.estado = 'RJ';

delete pessoa.idade;

console.log(`Nome: ${pessoa.nome}`);
console.log(pessoa);
