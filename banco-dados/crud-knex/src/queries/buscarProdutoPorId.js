export async function buscarProdutoPorId(db, id) {
	const produto = await db("produto")
		.select("id", "nome", "preco")
		.where({ id })
		.first();

	return produto;
}
