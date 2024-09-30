export async function atualizarProdutoPorId(prisma, id, produto) {
  await prisma.produto.update({
    where: {
      id,
    },
    data: {
      nome: produto.nome,
      preco: produto.preco,
    },
  });
}
