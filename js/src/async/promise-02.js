const promessaRejeitada = new Promise((resolve, reject) => {
    reject('Promessa rejeitada!');
});

console.log('Antes da promessa');
promessaRejeitada.catch((error) => console.log(error));
console.log('Depois da promessa');
