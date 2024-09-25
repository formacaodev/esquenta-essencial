import Pagina from '@/components/template/Pagina'
import Titulo from '@/components/template/Titulo'

export default function PaginaBlock() {
    return (
        <Pagina className="flex flex-col gap-7">
            <Titulo texto="Display Block" descricao="O elemento ocupa toda a largura disponível" />
            <div>
                <div>Linha 1</div>
                <span className="block">Linha 2</span>
                <span className="block">Linha 3</span>
                <div>Linha 4</div>
            </div>
        </Pagina>
    )
}
