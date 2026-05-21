// Usar notación de camello, 'Camel Case', Altas y Bajas
let nombreConApellido = "Juan Perez";
console.log( nombreConApellido );

let x, y;
x = 10, y = 20;
let z = x + y;
console.log( z );

//************************************************************

// JS es un lenguaje case sensitive

let nombreCompleto = "Juan Perez";
let nombrecompleto = "Carlos Lopez";

console.log(nombrecompleto);
console.log(nombrecompleto);
// console.log(NombreCompleto); // error: NombreCompleto is not defined

//************************************************************

// No se permiten numeros al inicio del nombre de la variable

// let 1nombreCompleto; //SyntaxError: Identifier directly after number

// esta declaraciones son validas
let $nombreCompleto; 
let _nombreCompleto;
let a1NombreCompleto;

//************************************************************

// No se permite el uso de palabras reservadas para nombrar una variable

// let break = 10; // SyntaxError: Unexpected keyword 'break'
// let _break = 10; // tenemos que modificar
// pero lo recomendado es no usarlas para evitar confusiones.
let pausa = 10;