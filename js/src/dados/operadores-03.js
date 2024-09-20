// Operadores lógicos

// AND
const planejamentoConcluido = true;
const estaSol = true;
const todosEstaoBem = true;

const temPicnic = planejamentoConcluido && estaSol && todosEstaoBem; // AND - E
console.log('Vamos fazer um picnic?', temPicnic);

// OR
const estudei = true;
const liUmLivro = false;

const diaProdutivo = estudei || liUmLivro; // OR - OU
console.log('Foi um dia produtivo?', diaProdutivo);

// NOT
const estouCansado = false;
console.log('Vou para a academia?', !estouCansado); // NOT - NÃO

// XOR
const usandoCalca = true; // XOR - OU EXCLUSIVO
const usandoBermeuda = true;

const vestidoCorretamente = usandoCalca !== usandoBermeuda;
console.log('Estou vestindo corretamente?', vestidoCorretamente);
