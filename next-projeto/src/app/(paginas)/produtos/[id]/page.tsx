import ProdutoDetalhes from '@/components/produto/ProdutoDetalhes'
import obterProdutoPorId from '@/data/service/obterProdutoPorId'
import Link from 'next/link'

export default async function PaginaProdutoPorId(props: any) {
    const produto = await obterProdutoPorId(+props.params.id)
    if (!produto) return <div>Produto não encontrado</div>
    return (
        <div className="flex flex-col gap-5">
            <ProdutoDetalhes produto={produto} />
            <Link href="/produtos" className="self-center bg-blue-500 p-2 rounded-md">
                Voltar
            </Link>
        </div>
    )
}
