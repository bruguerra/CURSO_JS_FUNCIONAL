function bomDia(){
    console.log('Bom dia!')
}

function boaTarde(){
    console.log('Boa tarde!')
}

// 1) Passa uma função como param para outra função

function executarQualquerCoisa (fn){
    if(typeof fn === 'function'){
        fn()
    }
}

executarQualquerCoisa(3)
executarQualquerCoisa(bomDia)
executarQualquerCoisa(boaTarde)

// 2) Retornar uma função a prtir de uma outra função

function potencia(base){
    return function(exp){
        return Math.pow(base,exp)
    }
}

const potenciaDe2 = potencia(2)
console.log(potenciaDe2(8))
console.log(potencia(2)(8))
