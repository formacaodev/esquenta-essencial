// Função construtora
function Contador() {
    this.numero = 0

    this.incrementar = function () {
        this.numero++
    }

    this.decrementar = function () {
        this.numero--
    }
}

const contador1 = new Contador()
contador1.incrementar()
contador1.incrementar()
contador1.incrementar()
console.log(contador1.numero)

contador1.decrementar()
console.log(contador1.numero)

const contador2 = new Contador()
contador2.decrementar()
contador2.decrementar()
contador2.decrementar()
contador2.decrementar()
contador2.decrementar()
contador2.decrementar()

console.log(contador2.numero)
