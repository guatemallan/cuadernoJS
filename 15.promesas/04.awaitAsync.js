/**
 * AWAIT
 * espera el resultado de una promesa, simplificando aun mas el uso de promesas
 * la palabra await solo se puede usar en una funcion declarada con async
 */

// async/await
async function functionPromesaAwait() {
    let miPromesa = new Promise( resolver =>{
        resolver('Promesa con await');
    });

    console.log(await miPromesa);
}

// uso 
functionPromesaAwait();