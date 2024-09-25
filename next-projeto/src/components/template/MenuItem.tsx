import Link from 'next/link'

interface MenuItemProps {
    icone?: any
    texto: string
    href: string
}

export default function MenuItem(props: MenuItemProps) {
    return (
        <div className="flex items-center gap-2 p-2 hover:bg-black/30">
            <props.icone size={22} stroke={1.5} />
            <Link href={props.href} className="text-sm">
                {props.texto}
            </Link>
        </div>
    )
}
