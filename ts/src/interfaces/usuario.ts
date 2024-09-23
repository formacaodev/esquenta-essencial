interface Usuario {
    id: number | string;
    nome: string;
    email: string;
    senha?: string | null;
    ativo: boolean;
}

let usuario: Usuario = {
    id: 1234,
    nome: 'Fulano de Tal',
    email: 'fulano@empresa.com.br',
    ativo: true,
    senha: null,
};

console.log(usuario.nome);
console.log(usuario);
