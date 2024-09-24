import { IconBrandReact } from '@tabler/icons-react'

export default function Cabecalho() {
    return (
        <header className="flex justify-between items-center bg-zinc-700 px-6 py-3">
            <div className="flex items-center gap-2">
                <IconBrandReact size={36} stroke={1} className="text-blue-400" />
                <span className="font-black">React Essencial</span>
            </div>
            <div className="flex justify-center items-center bg-purple-600 w-12 h-12 rounded-full">
                US
            </div>
        </header>
    )
}
