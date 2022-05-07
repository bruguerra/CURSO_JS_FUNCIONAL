const path = require('path')
const fn = require('./funcoes')
const { toArray, mergeMap, groupBy, map } = require('rxjs/operators')
const _ = require('lodash')


const caminho = path.join(__dirname, '..', 'dados', 'legendas')

const simbolos = [
    '.', '?', '-', ',', '"', '♪', '_', '<i>', '</i>', '\r',
    '[', ']', '(', ')'
]

fn.lerDiretorio(caminho)
    .pipe(
        fn.elementosTerminadosCom('.srt'),
        fn.lerArquivo(),
        fn.separarTextoPor('\n'),
        fn.removerElementosSeVazio(),
        fn.removerElementosSeApenasNumero(),
        fn.removerSimbolos(simbolos),
        fn.separarTextoPor(' '),
        fn.removerElementosSeVazio(),
        fn.removerElementosSeApenasNumero(),
        groupBy(el => el),
        mergeMap(grupo => grupo.pipe(toArray())), 
        map(palavras => ({elemento: palavras[0], qtde: palavras.length})),
        toArray(),
        map(array => _.sortBy(array, el => -el.qtde))
    )
    .subscribe(value => console.log(value))

//     fn.mesclarElemento
//     fn.agruparElemento
//     fn.ordenarPorAtribNumerico('qtde', 'desc'
// palavrasMaisUsadas(caminho)
//     .then(console.log)


