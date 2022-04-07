const carrinho = [
    {nome:'Caneta',qtde: 10, preco: 7.99, fragil: true},
    {nome:'Impressora',qtde: 1, preco: 649.50, fragil: true},
    {nome:'Caderno',qtde: 4, preco: 27.10, fragil: false},
    {nome:'Lapis',qtde: 3, preco: 5.82, fragil: false},
    {nome:'Tesoura',qtde: 1, preco: 19.20, fragil: true},
]

// nesse desafio precisamos utilizar filter, map e reduce

// 1. fragil: true
const obterFragil = el => el.fragil == true

// 2. qtde * preco -> total
const obterTotal = el => el.qtde * el.preco

// 2. media totais
const obterMediaTotais = (acc, el) => {
    const novaQtde = acc.qtde + 1
    const novoTotal = acc.total + el

    return {
        qtde: novaQtde,
        total: novoTotal,
        media: novoTotal / novaQtde
    }
}

// armazena o resultado em result
const result = carrinho.filter(obterFragil).map(obterTotal).reduce(obterMediaTotais, { qtde: 0, total: 0, media: 0})
console.log('Versão reduce do js: \n')
// imprime resultado
console.log(result)
console.log('\n')

// implementando o meu proprio reduce
Array.prototype.meuReduce = function(fn, inicial){
    let acc = inicial
    for(let i = 0; i < this.length; i++){
        if(!acc && i === 0){

            acc = this[i]
        
        } else {

            acc = fn(acc, this[i], i, this)
        }
    }

    return acc
}

const result2 = carrinho.filter(obterFragil).map(obterTotal).meuReduce(obterMediaTotais, { qtde: 0, total: 0, media: 0})
console.log('Versão meuReduce: \n')
console.log(result2)