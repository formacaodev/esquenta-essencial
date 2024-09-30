export async function excluirProdutoPorId(prisma, id) {
  await prisma.produto.delete({ where: { id } });
}
