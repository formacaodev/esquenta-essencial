const promessaComTimeout = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Resolvida após 5 segundos');
    }, 5000);
});

console.log('Antes da promessa');
promessaComTimeout.then((result) => console.log(result));
console.log('Depois da promessa');
