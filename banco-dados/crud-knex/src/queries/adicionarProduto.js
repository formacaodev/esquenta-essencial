export async function adicionarProduto(db, produto) {
	await db("produto").insert({
		nome: produto.nome,
		preco: produto.preco,
	});
}
