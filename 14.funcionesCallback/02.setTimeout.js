
/**
 * FUNCIONES ASÍNCRONAS con uso de setTimeout
 * Se ejecuta la función callback cuando se vence el tiempo configurado
 * Esto permite ejecutar varios procesos en paralelo
 */

function miFuncionConTimeOut(){
    console.log('Saludo asíncrono 1!');
}

// funcion como parametro
setTimeout(miFuncionConTimeOut, 3000); // se ejecuta después de 3 segundos

// se declara la funcion directamente
setTimeout( function(){console.log('Saludo asíncrono 2')}, 9000);

// funcion flecha
setTimeout(() => console.log('Saludo asíncrono 3!'), 1000);