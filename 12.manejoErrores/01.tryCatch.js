/**
 * Manejo de errores con bloques Try-Catch
 */

"use strict"

// x = 10; // x is not defined

// console.log('Continuamos...'); // No se ejecuta, debido al error. 

// Para evitarlo, usamos los bloques try catch
try{
    // alt + flecha para mover el codigo hacia arriba
    x = 10;
} 
// se captura el error como una variable
catch( error ){
    // manejamos el error, por ejemplo imprimiendolo en consola
    console.log(error); 
}
// este bloque de codigo siempre se ejecuta con o sin error.
// este bloque es opcional
finally{
    console.log('Termina la revision de errores.');
}

// el codigo se sigue ejecutando, después del manejo del error.
console.log('Continuamos...');