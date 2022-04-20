
function ordenar (array){
    return [...array].sort((a, b)=> a-b)
}


const nums = [3, 100, 7, 9, 4, 6]
nums[0] = 1000
const numsOrdenados = ordenar(nums)
console.log(nums)
console.log(ordenar(nums))
console.log(nums)


// Outra forma de fazer

function _ordenar (array){
    return [...array].sort((a, b)=> a-b)
}

const _nums = Object.freeze([3, 100, 7, 9, 4, 6])
_nums[0] = 1000
_nums.sort() // ISSO GERA UM ERRO !!!
const _numsOrdenados = _ordenar(_nums)
console.log(_numsOrdenados)