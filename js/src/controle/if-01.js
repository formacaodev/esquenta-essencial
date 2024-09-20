let chave = true;
let corajoso = true;

if (chave && corajoso) {
    console.log('O herói usa a chave e abre o baú! Tesouro encontrado!');
}

if (!chave && corajoso) {
    console.log('O herói tenta abrir o baú com as próprias mãos! Sem sucesso, mas foi uma tentativa valente.');
}

if (chave && !corajoso) {
    console.log('O herói tem a chave, mas fica com medo de abrir o baú... vai que tem uma maldição lá dentro!');
}

if (!chave && !corajoso) {
    console.log('O herói não tem chave e também não tem coragem... Melhor deixar esse baú pra lá.');
}

// Moral da história: Mesmo sem 'else', o herói sempre encontra um caminho (ou não)!
