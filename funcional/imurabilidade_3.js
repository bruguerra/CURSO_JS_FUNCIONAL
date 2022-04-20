// const pessoa = {
//     nome: 'Maria',
//     altura: 1.76,
//     cidade: 'São Paulo',
//     end: {
//         rua: 'Feliz!'
//     }
// }

const pessoa = Object.freeze({
    nome: 'Maria',
    altura: 1.76,
    cidade: 'São Paulo',
    end: {
        rua: 'Feliz!'
    }
})

pessoa.nome = 'Teste'

//pessoa = {} // isso gera um erro, pois pessoa trata-se de uma constante

// Atribuição por referência
//const novaPessoa = pessoa

// Passagem por referência (Função impura!)
function alteraPessoa(pessoa){
    const novaPessoa = {...pessoa}
    novaPessoa.nome = 'João'
    novaPessoa.cidade = 'Fortaleza'
    novaPessoa.end.rua = 'ABC' // Esse não altera, pois o spread altera somente na primeira camada do objeto
    return novaPessoa
}


console.log(pessoa)
console.log(alteraPessoa(pessoa))

let a = 3
let b = a

a++
a++
b++

console.log(a, b)