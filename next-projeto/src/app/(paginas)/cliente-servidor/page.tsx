import Cliente from '@/components/cliente-servidor/Cliente'
import Servidor from '@/components/cliente-servidor/Servidor'

export default function PaginaClienteServidor() {
    return (
        <div className="flex flex-col gap-10">
            <div>
                <h1>Componente Client</h1>
                <Cliente />
            </div>
            <div>
                <h1>Componente Server</h1>
                <Servidor />
            </div>
        </div>
    )
}
