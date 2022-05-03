const path = require('path')
const fn = require('./funcoes')

const caminho = path.join(__dirname, '..', 'dados', 'legendas')

const simbolos = [
    '.', '?', '-', ',', '"', '♪', '_', '<i>', '</i>', '\r',
    '[', ']', '(', ')'
]

// fn.lerDiretorio(caminho)
//     fn.elementosTerminadosCom('.srt'
//     arquivosSRT => fn.lerArquivos(arquivosSRT
//     fn.mesclarElemento
//     fn.separarTextoPor('\n'
//     //linhas => fn.removerSeVazio(linhas
//     fn.removerElementosSeVazi
//     //linhas => fn.removerElementosSeIncluir('-->', linhas
//     fn.removerElementosSeIncluir('-->'
//     //linhas => fn.removerSeApenasNumero(linhas
//     fn.removerElementosSeApenasNumer
//     fn.removerSimbolos(simbolos
//     fn.mesclarElemento
//     fn.separarTextoPor(' '
//     fn.removerElementosSeVazi
//     fn.removerElementosSeApenasNumer
//     fn.agruparElemento
//     fn.ordenarPorAtribNumerico('qtde', 'desc'
//     console.lo

const palavrasMaisUsadas = fn.composicao(
    fn.lerDiretorio,
    fn.elementosTerminadosCom('.srt'),
    fn.lerArquivos,
    fn.mesclarElementos,
    fn.separarTextoPor('\n'),
    fn.removerElementosSeVazio,
    fn.removerElementosSeIncluir('-->'),
    fn.removerElementosSeApenasNumero,
    fn.removerSimbolos(simbolos), 
    fn.mesclarElementos,
    fn.separarTextoPor(' '),
    fn.removerElementosSeVazio,
    fn.removerElementosSeApenasNumero,
    fn.agruparElementos,
    fn.ordenarPorAtribNumerico('qtde', 'desc'),
    console.log
)

palavrasMaisUsadas(caminho)
    .then(console.log)

   
