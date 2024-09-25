import { IconBrandReact } from '@tabler/icons-react'

export default function Cabecalho() {
    return (
        <header className="flex justify-between items-center bg-black border-b border-zinc-800 px-6 py-3">
            <div className="flex items-center gap-2">
                <IconBrandReact size={36} stroke={1} className="text-blue-400" />
                <span className="font-bold">Next.js Essencial</span>
            </div>
            <div className="flex justify-center items-center font-bold bg-purple-600 w-11 h-11 rounded-full">
                US
            </div>
        </header>
    )
}
