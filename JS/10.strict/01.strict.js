/** 
 * STRICT, modo estricto
 * Se usa para evitar el uso de malas practicas, como no declarar una variable y otros. Esto ayuda a evitar errores.
 * la frase "use strict"; debe aparecer en la primera linea.
 * Se puede usar al inicio de un archivo JS, o al inicio de una función.
 */

"use strict";

x = 10; // x is not defined

miFuncion(); // miFuncion is not defined

function miFuncion(){
    "use strict"
    y = 15; // y is not defined
    console.log(y);
}