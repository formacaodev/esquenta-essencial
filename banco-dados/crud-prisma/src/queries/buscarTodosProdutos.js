export async function buscarTodosProdutos(prisma) {
  const resposta = await prisma.produto.findMany();
  // const resposta = await prisma.produto.findMany({
  //   select:{
  //     nome:true,
  //     preco:true
  //   }
  // });

  return resposta;
}
