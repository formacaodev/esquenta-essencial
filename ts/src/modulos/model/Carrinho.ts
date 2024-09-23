import ItemCarrinho from './ItemCarrinho';

export default interface Carrinho {
    readonly itens: ItemCarrinho[];
    readonly cupom?: number;
    total: number;
    totalComDesconto: number;
}
