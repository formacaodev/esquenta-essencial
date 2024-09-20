const frutas = ['maçã', 'banana', 'laranja', 'tomate'];
const vegetais = ['cenoura', 'tomate', 'batata'];

const comida = frutas.concat(vegetais);
console.log(comida);

const index = comida.indexOf('tomate');
if (index !== -1) {
    comida.splice(index, 1);
}

console.log(comida);
comida.sort();
console.log(comida);

console.log(typeof 123);
console.log(typeof 'texto');
console.log(typeof {});
console.log(typeof comida);
