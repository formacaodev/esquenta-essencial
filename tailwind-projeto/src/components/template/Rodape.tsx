export interface RodapeProps {
    className?: string
}

export default function Rodape(props: RodapeProps) {
    return (
        <footer
            className={`
                flex justify-end items-center px-7
                border-t border-zinc-800
                text-zinc-500 text-sm
                ${props.className ?? ''}
            `}
        >
            <div className="flex justify-end items-center boxed">
                Todos os direitos reservados &copy; {new Date().getFullYear()}
            </div>
        </footer>
    )
}
