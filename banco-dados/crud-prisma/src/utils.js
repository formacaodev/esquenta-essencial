import tk from "terminal-kit";
export const term = tk.terminal;

export async function input(prompt) {
	term(prompt);
	return await term.inputField().promise;
}

export async function aguardaEnter() {
	term("\nPressione qualquer tecla para continuar...\n");
	await term.inputField().promise;
}

export async function sucesso(mensagem) {
	term.green.bold(`\n${mensagem}\n`);
	await aguardaEnter();
}

export async function info(mensagem) {
	term.blue.bold(`\n${mensagem}\n`);
}
