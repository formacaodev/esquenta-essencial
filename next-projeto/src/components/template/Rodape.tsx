export default function Rodape() {
    return (
        <footer className="flex justify-end bg-black border-t border-zinc-800 px-6 py-3">
            <span className="text-zinc-400 text-sm">
                Todos os direitos reservados &copy; {new Date().getFullYear()}
            </span>
        </footer>
    )
}
