'use client'
import { useState } from 'react'
import Pagina from '@/components/template/Pagina'

export default function Layout(props: any) {
    const [data] = useState(new Date())
    return (
        <Pagina>
            <div className="border-8 border-red-500 p-8">
                <span>{data.toLocaleTimeString()}</span>
                <main>{props.children}</main>
            </div>
        </Pagina>
    )
}
