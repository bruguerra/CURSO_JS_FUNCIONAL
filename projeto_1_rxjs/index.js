const path = require('path')
const fn = require('./funcoes')
const { toArray, map } = require('rxjs/operators')
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
        toArray(),
        fn.agruparElementos(),
        map(array => _.sortBy(array, el => -el.qtde))
    )
    .subscribe(value => console.log(value))

//     fn.mesclarElemento
//     fn.agruparElemento
//     fn.ordenarPorAtribNumerico('qtde', 'desc'
// palavrasMaisUsadas(caminho)
//     .then(console.log)


