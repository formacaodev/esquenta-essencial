async function fatosDoChuckNorris() {
    const resp = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await resp.json();
    return data.value;
}

async function obterFatosEmSequencia() {
    const fato1 = await fatosDoChuckNorris();
    const fato2 = await fatosDoChuckNorris();
    const fato3 = await fatosDoChuckNorris();
    return ['Sequência', fato1, fato2, fato3];
}

function obterFatosEmParalelo() {
    const label = Promise.resolve('paralelo');
    const fato1 = fatosDoChuckNorris();
    const fato2 = fatosDoChuckNorris();
    const fato3 = fatosDoChuckNorris();
    return Promise.all([label, fato1, fato2, fato3]);
}

obterFatosEmSequencia().then(console.log);
obterFatosEmParalelo().then(console.log);
