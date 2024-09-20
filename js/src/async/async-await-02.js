async function fatosDoChuckNorris() {
    const resp = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await resp.json();
    return data.value;
}

const fato1 = fatosDoChuckNorris();
const fato2 = fatosDoChuckNorris();
const fato3 = fatosDoChuckNorris();

Promise.all([fato1, fato2, fato3]).then(console.log);
