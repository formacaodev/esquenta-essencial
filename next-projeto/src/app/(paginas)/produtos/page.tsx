import ProdutoItem from '@/components/produto/ProdutoItem'
import obterProdutos from '@/data/service/obterProdutos'

export default async function PaginaProdutos() {
    const produtos = await obterProdutos()
    return (
        <div className="flex flex-col gap-6">
            <h1 className="text-2xl font-black">Lista de Produtos</h1>
            <div className="flex flex-col gap-5">
                {produtos.map((produto) => (
                    <ProdutoItem key={produto.id} produto={produto} />
                ))}
            </div>
        </div>
    )
}
