interface Produto {
    id: number;
    nome: string;
    descricao: string;
    preco: number;
    imagem: string;
}

const produto1: Produto = {
    id: 1,
    nome: 'Smartphone',
    descricao: 'Um smartphone top de linha',
    preco: 2000,
    imagem: 'smartphone.jpg',
};

const produto2: Partial<Produto> = {
    id: 2,
    nome: 'Notebook',
    preco: 3000,
};

console.log(produto1);
console.log(produto2);
