export async function adicionarProduto(prisma, produto) {
  await prisma.produto.create({
    data: {
      nome: produto.nome,
      preco: produto.preco,
    },
  });
}
