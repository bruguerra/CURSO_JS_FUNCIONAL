const letrasAninhadas =  [['O', 'l', 'á'],
                [' '],
                ['m', ['u', 'n', 'd'], 'o'],
                ['', '!', '!', '!', '!']]   

// O parametro recebido pela função flat indica quantos níveis serão 'achatados', ex: 1, 2, Infinity

const letras = letrasAninhadas.flat(Infinity)     

console.log(letras) 

const resultado = letrasAninhadas
    .flatMap(l => [l, ','])
    .reduce((a, b) => a + b)

console.log(resultado)    