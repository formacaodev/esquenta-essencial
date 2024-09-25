export default function Servidor() {
    return (
        <div className="flex gap-3 text-xl bg-blue-600 border-2 border-white p-5">
            <span className="font-bold">Data atual:</span>
            <span>{new Date().toLocaleTimeString()}</span>
        </div>
    )
}
