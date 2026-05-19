/**
 * PROMESAS Y SETTIMEOUT
 */

// no es necesario manejar la parte de error
let promesa = new Promise((resolver) =>{
    console.log('Inicio promesa...');
    setTimeout( () => resolver('Saludos con promesa y timeout'),3000);
    console.log('Fin promesa...');
});

promesa.then(valor => console.log(valor)); // ejecución asíncrona