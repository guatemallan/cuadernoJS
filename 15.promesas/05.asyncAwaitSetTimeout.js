/**
 * Async, Await y setTimeout
 */

async function funcionPromesaAwitTimeout() {
    console.log('Inicio de la función');
    let miPromesa = new Promise(resolver => {
        setTimeout(() => resolver('Promesa con await y timeout!'),3000);
    });
    console.log(await miPromesa);
    console.log('Fin de la función'); // en este caso, si se espera el tiempo de la ejecución del timeout
}

funcionPromesaAwitTimeout();
