export async function buscarTodosProdutos(db) {
	const resposta = await db.select("*").from("produto");
	// const resposta = await db.select("nome", "preco").from("produto");
	return resposta;
}
