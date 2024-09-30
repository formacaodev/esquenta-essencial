export async function buscarProdutoPorId(prisma, id) {
	const produto = await prisma.produto.findUnique({
		where: {
			id,
		},
	});
	return produto;
}
