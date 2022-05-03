const { Observable } = require('rxjs')

const promise = new Promise(resolve => {
    resolve('Promise é bem legal!')
    resolve('bunda') // simplesmente esse resolve é ignorado
})

promise.then(console.log)

const obs = new Observable(subscriber => {
    subscriber.next('Observer')
    subscriber.next('é')// consigo mandar varios - exatamente essa ideia de streaming
    subscriber.next('bem')
    setTimeout(() => {
        subscriber.next('legal!')
        subscriber.complete()
    }, 1000)

})

obs.subscribe(console.log)