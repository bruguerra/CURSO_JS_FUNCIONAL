
// https://viacep.com.br/ws/01001000/json

function executarAlgo(){
    return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Deu certo!!!' )
            }, 2000);
        }
    )
}


executarAlgo().then(msg => console.log(msg))