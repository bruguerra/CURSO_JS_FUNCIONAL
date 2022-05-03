// Os dois tipos...

// 1. Operadores de Criação
const { from } = require('rxjs')

// 2. Operadores Encadeáveis (Pipeable Op.)
const { last, first, map } = require('rxjs/operators')

const obs = from([1, 2, 'ana', false, 'ultimo'])
    .pipe(
        last(),
        map(v => v[0]), 
        map(v => `A letra encontrada foi: ${v}`)
    )
    //.pipe(first())
    .subscribe((valor) => {
        console.log(`O valor gerado foi: ${valor}`)
    })