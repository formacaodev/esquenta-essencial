import { PrismaClient } from "@prisma/client";
import { term, input, aguardaEnter, sucesso, info } from "./utils.js";
import {
  adicionarProduto,
  atualizarProdutoPorId,
  buscarTodosProdutos,
  buscarProdutoPorId,
  excluirProdutoPorId,
} from "./queries/index.js";

const prisma = new PrismaClient();

async function adicionarProdutoMenu() {
  const nome = await input("Nome do produto: ");
  const preco = await input("\nPreço do produto: ");
  await adicionarProduto(prisma, { nome, preco: +preco });
  await sucesso("Produto adicionado!");
}

async function atualizarProdutoPorIdMenu() {
  const id = await input("ID do produto: ");
  const nome = await input("\nNovo nome do produto: ");
  const preco = await input("\nNovo preço do produto: ");
  await atualizarProdutoPorId(prisma, +id, { nome, preco: +preco });
  await sucesso("Produto atualizado!");
}

async function buscarTodosProdutosMenu() {
  const produtos = await buscarTodosProdutos(prisma);
  console.log(produtos)
  info("Produtos:");
  term("\n" + JSON.stringify(produtos, null, 2) + "\n");
  await aguardaEnter();
}

async function buscarProdutoPorIdMenu() {
  const id = await input("ID do produto: ");
  const produto = await buscarProdutoPorId(prisma, +id);
  info("Produto:");
  term("\n" + JSON.stringify(produto, null, 2) + "\n");
  await aguardaEnter();
}

async function excluirProdutoPorIdMenu() {
  const id = await input("ID do produto: ");
  await excluirProdutoPorId(prisma, +id);
  await sucesso("Produto excluído!");
}

async function menu() {
  const items = [
    "Adicionar Produto",
    "Atualizar Produto por ID",
    "Buscar Todos Produtos",
    "Buscar Produto por ID",
    "Excluir Produto por ID",
    "Sair",
  ];

  while (true) {
    term.clear();
    const response = await term.singleColumnMenu(items).promise;

    term.clear();
    switch (response.selectedIndex) {
      case 0:
        await adicionarProdutoMenu();
        break;
      case 1:
        await atualizarProdutoPorIdMenu();
        break;
      case 2:
        await buscarTodosProdutosMenu();
        break;
      case 3:
        await buscarProdutoPorIdMenu();
        break;
      case 4:
        await excluirProdutoPorIdMenu();
        break;
      case 5:
        await prisma.$disconnect();
        term.processExit();
        break;
    }
  }
}

menu();
