export async function atualizarProdutoPorId(db, id, produto) {
	await db("produto").where({ id }).update({
		nome: produto.nome,
		preco: produto.preco,
	});
}
