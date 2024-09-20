const promessaSimples = new Promise((resolve, reject) => {
    resolve('Promessa resolvida!');
});

console.log('Antes da promessa');
promessaSimples.then((resultado) => console.log(resultado));
console.log('Depois da promessa');
