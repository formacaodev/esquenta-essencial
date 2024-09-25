import Link from 'next/link'

export default function PaginaComLayout() {
    return (
        <div className="flex flex-col justify-center items-center gap-5 text-2xl">
            <h1>Conteúdo da página RAIZ</h1>
            <Link href="/layout/filha" className="botao">
                Ir para a página FILHA
            </Link>
        </div>
    )
}
