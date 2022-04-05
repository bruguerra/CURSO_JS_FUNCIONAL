const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

function exibirConteudo(_, conteudo){
    console.log(conteudo.toString())
}

console.log('Inicio...')

// fs.readFile(caminho, {}, exibirConteudo)
fs.readFile(caminho, exibirConteudo) // javascript permite suprimir um parametro (no caso, suprimiu o segundo)
fs.readFile(caminho, (_,conteudo) => console.log(conteudo.toString()))

console.log('Fim...')


console.log('Inicio Sync...')
const conteudo = fs.readFileSync(caminho)
console.log(conteudo.toString())
console.log('Fim Sync...')