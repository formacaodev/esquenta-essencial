import { calcularDesconto, calcularTotal } from './functions/calcularTotal';
import removerItensZerados from './functions/removerItensZerados';
import Carrinho from './model/Carrinho';

const carrinhoOriginal: Carrinho = {
    itens: [
        { nome: 'Caneta', preco: 1.5, quantidade: 2 },
        { nome: 'Caderno', preco: 10, quantidade: 1 },
        { nome: 'Borracha', preco: 0.5, quantidade: 3 },
        { nome: 'Estojo', preco: 5, quantidade: 0 },
    ],
    cupom: 0.1,
    total: 0,
    totalComDesconto: 0,
};

const carrinhoSemItensZerados = removerItensZerados(carrinhoOriginal);
const carrinhoComTotal = calcularTotal(carrinhoSemItensZerados);
const carrinhoComDesconto = calcularDesconto(carrinhoComTotal);

console.log(carrinhoOriginal);
console.log(carrinhoComDesconto);
