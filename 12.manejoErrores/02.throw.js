/**
 * THROW, se usa para arrojar excepciones personalizadas
 */

'use strict'

try{
    throw 'Mi error';
    let x = 10;

}
catch (error){
    console.log(error); // 'Mi error'
}

///

try{
   x = 10;
}
catch(error){
    console.log(error); //ReferenceError { stack: (...), message: 'x is not defined' }
    console.log(error.name); // ReferenceError
    console.log(error.message); // x is not defined
}

// 

let resultado = 'Hola';

try{
   if (isNaN(resultado)) throw 'No es un numero';
   else if (resultado === '') throw 'Es cadena vacía';
   else if (resultado >= 0) throw 'Información, es valor positivo!'
   else if (resultado < 0) throw 'Información, es valor negativo!'
}
catch(error){
    console.log(error); // 'No es un numero'
    console.log(error.name); // 'undefined'
    console.log(error.message); // 'undefined'
}