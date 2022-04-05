
function somar(n1){
    return function(n2){
        return function(n3 = 0){
            return n1+n2+n3
        }
    }
}

console.log(somar(3)(4)(5))



function calcular(n1){
    return function(n2){
        return function(fn){
            return fn(n1,n2)
        }
    }
}

function multiplicar(a,b){
    return a * b
}


console.log(calcular(3)(7)(multiplicar))
