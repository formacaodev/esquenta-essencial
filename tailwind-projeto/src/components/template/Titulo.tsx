export interface TituloProps {
    texto: string
    descricao?: string
}

export default function Titulo(props: TituloProps) {
    return (
        <div className="flex flex-col">
            <h1 className="font-bold text-2xl">{props.texto}</h1>
            {props.descricao && <p className="text-zinc-400 text-sm">{props.descricao}</p>}
        </div>
    )
}
