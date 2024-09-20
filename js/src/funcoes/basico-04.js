function contarVogais(texto) {
    const vogais = 'aeiouAEIOU';
    let contador = 0;

    for (const letra of texto) {
        if (vogais.includes(letra)) {
            contador++;
        }
    }

    return contador;
}

console.log(contarVogais('javascript'));
