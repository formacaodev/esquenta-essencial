const pedidos = [
    { id: 1, status: 'pendente' },
    { id: 2, status: 'enviado' },
    { id: 3, status: 'entregue' },
    { id: 4, status: 'cancelado' },
    { id: 5, status: 'pendente' },
];

for (let i = 0; i < pedidos.length; i++) {
    let pedido = pedidos[i];

    if (pedido.status === 'pendente') {
        console.log(`Pedido ${pedido.id}: Aguardando pagamento ou confirmação.`);
    } else if (pedido.status === 'enviado') {
        console.log(`Pedido ${pedido.id}: Pedido foi enviado, acompanhe o rastreamento.`);
    } else if (pedido.status === 'entregue') {
        console.log(`Pedido ${pedido.id}: Pedido entregue com sucesso!`);
    } else if (pedido.status === 'cancelado') {
        console.log(`Pedido ${pedido.id}: O pedido foi cancelado.`);
    } else {
        console.log(`Pedido ${pedido.id}: Status desconhecido.`);
    }
}
