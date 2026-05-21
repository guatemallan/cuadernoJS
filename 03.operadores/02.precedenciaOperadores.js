/* PRECEDENCIA DE OPERADORES ************************************************************
*/

let a = 3, b = 2, c = 1, d = 4;

// se evalua de izquierda a derecha
// en este caso se evalua el valor de a, 
// luego se multiplica por el valor de b
// y por último se asigna a z
let z = a * b;
console.log(z);

// se evalya el valor de a,
// se multiplica por el valor de b
// se le suma el valor de c
// y por último se asigna a z
z = a * b + c;
console.log(z);

// en este caso
// la multiplicación tiene precedencia a la suma 
z = c + a * b;
console.log(z);

// primero se operan la multiplicación y división
// luego se opera la suma
z = a * b + c / d;
console.log(z);

// primero se realiza la multiplicación
// por estar más a la izquierda que la división
// luego se realiza la división
// y por último la suma
z = c + a * b / d;
console.log(z);

// primero se realiza lo que está en parentesis
// luego la multiplicación
// y por último la división
z = (c + a) * b / c;
console.log(z);