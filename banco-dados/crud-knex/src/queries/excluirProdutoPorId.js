export async function excluirProdutoPorId(db, id) {
	await db("produto").where({ id }).del();
}
