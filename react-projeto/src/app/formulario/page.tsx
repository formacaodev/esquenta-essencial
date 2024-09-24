import Formulario from '@/components/Formulario'
import Pagina from '@/components/template/Pagina'

export default function PaginaFormulario() {
    return (
        <Pagina>
            <div>
                <h1 className="text-2xl font-bold">Formulário</h1>
                <Formulario />
            </div>
        </Pagina>
    )
}
