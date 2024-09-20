function esperarPor(segundos) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, segundos * 1000);
    });
}

async function executar() {
    console.log('Início');

    await esperarPor(2);
    console.log('Depois de 2 segundos');

    await esperarPor(3);
    console.log('Depois de 3 segundos');

    await esperarPor(5);
    console.log('Depois de 5 segundos');

    console.log('Fim');
}

executar();
