const primeiroElemento = el => el[0]
const letraMinuscula = el => el.toLowerCase()

// const a = function(cumprirPromessa){
//     cumprirPromessa(['Ana', 'Bia', 'Carlos', 'Daniel'])
// }


const a = cumprirPromessa => cumprirPromessa(['Ana', 'Bia', 'Carlos', 'Daniel'])


const promise = new Promise(a)

promise.then(primeiroElemento)
        .then(primeiroElemento)
        .then(letraMinuscula)
        .then(console.log)