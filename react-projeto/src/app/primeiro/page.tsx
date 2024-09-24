import Botao from '@/components/Botao'
import Pagina from '@/components/template/Pagina'

export default function PrimeiraPagina() {
    return (
        <Pagina>
            <div className="flex gap-2">
                <Botao label="Salvar" />
                <Botao label="Cancelar" />
            </div>
        </Pagina>
    )
}
