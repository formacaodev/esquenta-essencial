let statusUsuario = 'banido'; // Pode ser: "ativo", "inativo", "banido" ou "pendente"

if (statusUsuario === 'ativo') {
    console.log('Bem-vindo de volta! Acesso permitido.');
} else if (statusUsuario === 'inativo') {
    console.log('Sua conta está inativa. Por favor, entre em contato com o suporte.');
} else if (statusUsuario === 'banido') {
    console.log('Acesso negado! Sua conta foi banida por violar as políticas.');
} else if (statusUsuario === 'pendente') {
    console.log('Sua conta ainda não foi verificada. Por favor, verifique seu e-mail para ativação.');
} else {
    console.log('Status de usuário desconhecido. Por favor, tente novamente mais tarde.');
}

console.log('Fim');
