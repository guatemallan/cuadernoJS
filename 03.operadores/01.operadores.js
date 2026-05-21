/*
OPERADORES ARITMETICOS
**********************************************************

+   Suma
-   Resta
*   Multiplicación
**  Exponenciación (ES20216, Echma Script 2016)
/   División
%   Modulus (Remanente)
++  Incremento
--  Decremento

*/

let a = 3, b = 2;
let z = a + b;
console.log('Resultado de la Suma: ' + z);

z = a - b;
console.log('Resultado de la Resta: ' + z);

z = a * b;
console.log('Resultado de la Multiplicación: ' + z);

z = a / b;
console.log('Resultado de la División: ' + z);

z = a % b;
console.log('Resultado de la operación Residuo: ' + z);

z = a ** b;
console.log('Resultado de la Exponenciación: ' + z);

// ***************************************************************

// INCREMENTO
 
// pre-incremento
z = ++a;
console.log('Pre incremento de la variable a' + a);
console.log('Pre incremento de la variable z' + z);
// se incrementa antes de asignar a la variable z

// post-incremento
z = b++;
console.log('Pre incremento de la variable b' + b);
console.log('Pre incremento de la variable z' + z);
// se incrementa luego de asignar a la variable z

// ***************************************************************

// DECREMENTO
 
// pre-decremento
z = --a;
console.log('Predecremento de la variable a' + a);
console.log('Predecremento de la variable z' + z);
// se incrementa antes de asignar a la variable z

// post-decremento
z = b--;
console.log('Predecremento de la variable b' + b);
console.log('Predecremento de la variable z' + z);
// se incrementa luego de asignar a la variable z

