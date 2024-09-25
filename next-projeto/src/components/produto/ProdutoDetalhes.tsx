import Produto from '@/data/model/Produto'
import Image from 'next/image'

interface ProdutoDetalhesProps {
    produto: Produto
}

export default function ProdutoDetalhes(props: ProdutoDetalhesProps) {
    const { produto } = props
    return (
        <div className="flex flex-col items-center gap-4">
            <div className="w-96 h-56 relative">
                <Image src={produto.imagemUrl} alt={produto.nome} fill />
            </div>
            <div className="flex flex-col items-center text-center gap-5 max-w-[500px]">
                <h1 className="text-4xl font-bold">{produto.nome}</h1>
                <p className="text-lg text-gray-500">{produto.descricao}</p>
                <span className="text-2xl">R$ {produto.preco.toFixed(2)}</span>
            </div>
        </div>
    )
}
