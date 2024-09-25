import { IconBrandTailwind } from '@tabler/icons-react'

export default function Logo() {
    return (
        <div className="flex items-center gap-2">
            <IconBrandTailwind size={40} stroke={1} />
            <div>
                <span className="font-black">Tailwind</span>
                <span>Essencial</span>
            </div>
        </div>
    )
}
