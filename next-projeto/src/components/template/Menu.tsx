import {
    IconArrowsDiff,
    IconError404,
    IconHome2,
    IconLayout2,
    IconListDetails,
    IconUserHexagon,
} from '@tabler/icons-react'
import MenuItem from './MenuItem'

export default function Menu() {
    return (
        <aside className="w-80 bg-zinc-900 p-6 border-r border-zinc-800">
            <nav className="flex flex-col gap-2">
                <MenuItem texto="Início" href="/" icone={IconHome2} />
                <MenuItem texto="Layout" href="/layout" icone={IconLayout2} />
                <MenuItem texto="Não Existe" href="/nao-existe" icone={IconError404} />
                <MenuItem texto="Produtos" href="/produtos" icone={IconListDetails} />
                <MenuItem
                    texto="Cliente vs Servidor"
                    href="/cliente-servidor"
                    icone={IconArrowsDiff}
                />
                <MenuItem texto="Administração" href="/admin" icone={IconUserHexagon} />
            </nav>
        </aside>
    )
}
