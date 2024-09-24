'use client'
import { useState } from 'react'

interface ContadorProps {
    valorInicial?: number
}

export default function Contador(props: ContadorProps) {
    const [numero, alterarNumero] = useState(props.valorInicial ?? 0)

    function decrementar() {
        alterarNumero(numero - 1)
    }

    function incrementar() {
        alterarNumero(numero + 1)
    }

    return (
        <div>
            <h1>Contador</h1>
            <span>{numero}</span>
            <div className="flex gap-2">
                <button onClick={decrementar} className="bg-red-500 p-2">
                    Decrementar
                </button>
                <button onClick={incrementar} className="bg-green-600 p-2">
                    Incrementar
                </button>
            </div>
        </div>
    )
}
