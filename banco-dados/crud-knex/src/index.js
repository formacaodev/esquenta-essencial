import knex from "knex";
import knexfile from "../knexfile.js";
import { term, input, aguardaEnter, sucesso, info } from "./utils.js";
import {
	adicionarProduto,
	atualizarProdutoPorId,
	buscarTodosProdutos,
	buscarProdutoPorId,
	excluirProdutoPorId,
} from "./queries/index.js";

const db = knex(knexfile);

async function adicionarProdutoMenu() {
	const nome = await input("Nome do produto: ");
	const preco = await input("\nPreço do produto: ");
	await adicionarProduto(db, { nome, preco });
	await sucesso("Produto adicionado!");
}

async function atualizarProdutoPorIdMenu() {
	const id = await input("ID do produto: ");
	const nome = await input("\nNovo nome do produto: ");
	const preco = await input("\nNovo preço do produto: ");
	await atualizarProdutoPorId(db, id, { nome, preco });
	await sucesso("Produto atualizado!");
}

async function buscarTodosProdutosMenu() {
	const produtos = await buscarTodosProdutos(db);
	info("Produtos:");
	term("\n" + JSON.stringify(produtos, null, 2) + "\n");
	await aguardaEnter();
}

async function buscarProdutoPorIdMenu() {
	const id = await input("ID do produto: ");
	const produto = await buscarProdutoPorId(db, id);
	info("Produto:");
	term("\n" + JSON.stringify(produto, null, 2) + "\n");
	await aguardaEnter();
}

async function excluirProdutoPorIdMenu() {
	const id = await input("ID do produto: ");
	await excluirProdutoPorId(db, id);
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
				term.processExit();
				break;
		}
	}
}

menu();
