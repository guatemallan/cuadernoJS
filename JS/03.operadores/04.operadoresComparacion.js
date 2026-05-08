// OPERADORES DE COMPARACIÓN

let a = 3, b = 2, c = '3';

// IGUALDAD
// En este caso estamos comparando el valor de las variables a y b
// se realiza una comparacion sin importar el tipo
let z = a == b;
console.log(z);

// IGUALDAD ESTRICTO
// revisa el valor pero tambien los tipos
z = a === c;
console.log(z);

// acá no revisa los tipos
console.log(a==c);

// DESIGUALDAD
// comparacion de valores
z = a != c;
console.log(z);

// DESIGUALDAD ESTRICTA
// comparacion de valores y tipos
z = a !== c;
console.log(z);