const { of, Observable } = require('rxjs')


function terminadoCom(parteFinal) {
    return function (fonte) {
        return new Observable(subscriber => {
            fonte.subscribe({
                next(texto) {
                    if (Array.isArray(texto)) {
                        subscriber.next(
                            texto.filter(el => el.endsWith(parteFinal))
                        )
                    } else if (texto.endsWith(parteFinal)) {
                        subscriber.next(texto)
                    }
                },
                error(e) {
                    subscriber.error(e)
                },
                complete() {
                    subscriber.complete()
                }
            })
        })
    }
}

of(['Ana Silva', 'Maria Silva', 'Pedro Rocha'])
    .pipe(terminadoCom('Silva'))
    .subscribe(console.log)