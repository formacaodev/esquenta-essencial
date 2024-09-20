function executarTudo(...funcoes) {
    for (let funcao of funcoes) {
        funcao();
    }
}

const bomDia = () => console.log('Bom dia!');
const boaTarde = () => console.log('Boa tarde!');

function boaNoite() {
    console.log('Boa noite!');
}

executarTudo(bomDia, boaTarde, boaNoite);
