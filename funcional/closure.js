// Closure é qyuando a função "lembra"
// seu escopo léxico, mesmo quando a função
// é executada fora desse escopoléxico

const somarXMais3 = require('./closure_escopo')

const x = 1000 

console.log(somarXMais3())