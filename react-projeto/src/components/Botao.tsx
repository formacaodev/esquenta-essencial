// Primeiro Componente - Componente Funcional
export default function Botao(props: any) {
    // JSX - Sintaxe extendida do JavaScript
    return <button className="bg-green-500 p-2 rounded-md">{props.label ?? 'Ok'}</button>
}
