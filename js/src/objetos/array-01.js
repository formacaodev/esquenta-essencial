const frutas = ['maçã', 'banana', 'laranja'];
console.log(frutas);

console.log(frutas[1]);
console.log(frutas.length);

frutas.push('uva');
console.log('push:', frutas);

console.log('pop:', frutas.pop());
console.log(frutas);

frutas.unshift('manga');
console.log('unshift:', frutas);

console.log('shift:', frutas.shift());
console.log(frutas);
