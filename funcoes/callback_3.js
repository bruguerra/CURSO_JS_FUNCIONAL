
const nums = [1,2,3,4,5]
const dobro = n => n * 2
console.log(nums.map(dobro))

const nomes = ['Ana', 'Bia', 'Gui','Lia','Rafa']
const primeiraLetra = texto => texto[0]
const letras = nomes.map(primeiraLetra)
console.log(nomes,letras)

const carrinho = [
    {nome:'Caneta',qtde: 10, preco: 7.99},
    {nome:'Impressora',qtde: 0, preco: 649.50},
    {nome:'Caderno',qtde: 4, preco: 27.10},
    {nome:'Lapis',qtde: 3, preco: 5.82},
    {nome:'Tesoura',qtde: 1, preco: 19.20},
]

const obterProdutos = el => el.nome
const obterValorTotal = el => el.qtde * el.preco

// const produtos = carrinho.map(obterProdutos)
// const precosTotal = carrinho.map(obterValorTotal)
// console.log(produtos)
// console.log(precosTotal)

Array.prototype.meuMap = function(fn){
    const novoArray = []
    for(let i = 0; i < this.length; i++){
        novoArray.push(fn(this[i],i,this))
    }

    return novoArray
}

const produtos = carrinho.meuMap(obterProdutos)
const precosTotal = carrinho.meuMap(obterValorTotal)
console.log(produtos)
console.log(precosTotal)

const qtdeMaiorQueZero = item => item.qtde > 0

const nomeItensValido = carrinho.filter(qtdeMaiorQueZero)
                                .map(obterProdutos)

console.log(nomeItensValido)                                