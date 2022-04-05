// Arrow function

const saudacao = nome => `Fala aí, ${nome}!!!`

console.log(saudacao('João'))

const somar = numeros =>{
    var total = 0
    for(let n of numeros){
        total += n
    }

    return total
}

// o 3 pontinhos permite invocar a função passando uma quantidade livre de parametros, armazenando eles em um unico array
const somarV2 = (...numeros) =>{
    console.log(Array.isArray(numeros))
    var total = 0
    for(let n of numeros){
        total += n
    }

    return total
}

console.log(somar([3,3]))
console.log(somarV2(1, 6, 1))

const potencia = base => exp => Math.pow(base,exp)

console.log(potencia(2)(10))

// this
Array.prototype.ultimo = function(){
    return console.log(this[this.length - 1])
}

const numeros = [1,2,3,4,5]

numeros.ultimo()
