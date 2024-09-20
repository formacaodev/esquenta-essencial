// Adiantando um pouco os conceitos...

const nomes = ['Camisa', 'Calça', 'Tênis', 'Boné'];
const quantidades = [2, 1, 1, 3];
const precos = [50, 120, 200, 30];
console.log('Arrays:', nomes, quantidades, precos);

const item = { nome: 'Camisa', quantidade: 2, preco: 50.0 };
console.log('Objeto:', item);

// Exercício FOR
const carrinho = [
    { nome: 'Camisa', quantidade: 2, preco: 50.0 },
    { nome: 'Calça', quantidade: 1, preco: 120.0 },
    { nome: 'Tênis', quantidade: 1, preco: 200.0 },
    { nome: 'Boné', quantidade: 3, preco: 30.0 },
];

let totalCompra = 0;

for (let i = 0; i < carrinho.length; i++) {
    let item = carrinho[i];
    let subtotal = item.quantidade * item.preco;
    totalCompra = totalCompra + subtotal;
    console.log(`Item: ${item.nome} | Quantidade: ${item.quantidade} | Subtotal: R$${subtotal.toFixed(2)}`);
}

console.log(`Valor total da compra: R$${totalCompra.toFixed(2)}`);
