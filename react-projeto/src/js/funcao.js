// Função construtora
function Botao(props) {
    this.label = props?.label ?? 'OK'
}

const botao1 = new Botao({ label: 'Salvar' })
console.log(botao1.label)

const botao2 = new Botao({ label: 'Cancelar' })
console.log(botao2.label)
