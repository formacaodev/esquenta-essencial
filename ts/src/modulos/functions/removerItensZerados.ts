import Carrinho from '../model/Carrinho';

export default function removerItensZerados(carrinho: Carrinho): Carrinho {
    const itens = carrinho.itens.filter((item) => item.quantidade > 0);
    return { ...carrinho, itens };
}
