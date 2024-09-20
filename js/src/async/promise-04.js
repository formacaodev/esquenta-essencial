const verificarNota = (numero) => {
    return new Promise((resolve, reject) => {
        if (numero >= 0 && numero <= 10) {
            resolve('É uma nota válida');
        } else {
            reject('Algo deu errado com a nota');
        }
    });
};

verificarNota(17)
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
