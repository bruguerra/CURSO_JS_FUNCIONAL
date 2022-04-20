const path = require('path')
const fn = require('./funcoes')

const caminho = path.join(__dirname, '..', 'dados', 'legendas')

const simbolos = [
    '.', '?', '-', ',', '"', '♪', '_', '<i>', '</i>', '\r',
    '[', ']', '(', ')'
]

fn.lerDiretorio(caminho)
    .then(fn.elementosTerminadosCom('.srt'))
    .then(arquivosSRT => fn.lerArquivos(arquivosSRT))
    .then(fn.mesclarElementos)
    .then(fn.separarTextoPor('\n'))
    //.then(linhas => fn.removerSeVazio(linhas))
    .then(fn.removerElementosSeVazio)
    //.then(linhas => fn.removerElementosSeIncluir('-->', linhas))
    .then(fn.removerElementosSeIncluir('-->'))
    //.then(linhas => fn.removerSeApenasNumero(linhas))
    .then(fn.removerElementosSeApenasNumero)
    .then(fn.removerSimbolos(simbolos))
    .then(fn.mesclarElementos)
    .then(fn.separarTextoPor(' '))
    .then(fn.removerElementosSeVazio)
    .then(fn.removerElementosSeApenasNumero)
    .then(fn.agruparElementos)
    .then(fn.ordenarPorAtribNumerico('qtde', 'desc'))
    .then(console.log)
