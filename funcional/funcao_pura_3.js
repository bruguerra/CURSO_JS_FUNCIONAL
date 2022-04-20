// Uma função pura é uma função em que o valor
// de retorno é determinado APENAS por seus valores
// de entrada, sem efeitos colaterais observáveis

let qtdeExecucoes = 0

// Pura!
function somar(a, b) {
    qtdeExecucoes++ // efeitos colaterias observáveis
    return a + b
}

console.log(qtdeExecucoes)
console.log(somar(68, 31))
console.log(somar(68, 31))
console.log(somar(68, 31))
console.log(somar(68, 31))
console.log(somar(68, 31))
console.log(qtdeExecucoes)