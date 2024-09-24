'use client'

import useFormularioUsuario from '@/hooks/useFormularioUsuario'

export default function Formulario() {
    const { nome, alterarNome, email, alterarEmail, senha, alterarSenha, salvar } =
        useFormularioUsuario()

    return (
        <div className="flex flex-col gap-3">
            <input
                type="text"
                placeholder="Informe o nome"
                size={80}
                value={nome}
                onChange={(e) => alterarNome(e.target.value)}
                className="bg-zinc-800 p-2 rounded-md outline-none"
            />
            <input
                type="email"
                placeholder="Informe o email"
                size={80}
                value={email}
                onChange={(e) => alterarEmail(e.target.value)}
                className="bg-zinc-800 p-2 rounded-md outline-none"
            />
            <input
                type="password"
                placeholder="Informe a senha"
                size={80}
                value={senha}
                onChange={(e) => alterarSenha(e.target.value)}
                className="bg-zinc-800 p-2 rounded-md outline-none"
            />

            <button onClick={salvar} className="bg-green-500 p-2 rounded-md">
                Salvar
            </button>

            <div className="flex gap-5">
                <span>{nome}</span>
                <span>{email}</span>
                <span>{senha}</span>
            </div>
        </div>
    )
}
