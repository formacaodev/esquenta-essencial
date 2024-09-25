import Logo from './Logo'
import MenuUsuario from './MenuUsuario'

export interface CabecalhoProps {
    className?: string
}

export default function Cabecalho(props: CabecalhoProps) {
    return (
        <header
            className={`
                flex justify-between items-center px-7 
                border-b border-zinc-800
                ${props.className ?? ''}
            `}
        >
            <div className="flex justify-between items-center boxed">
                <Logo />
                <MenuUsuario />
            </div>
        </header>
    )
}
