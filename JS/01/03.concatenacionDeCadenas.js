
var nombre = 'Juan';
var apellido = 'Perez';
var nombreCompleto = nombre +' '+ apellido;

console.log(nombre);
console.log(apellido);
console.log(nombreCompleto);

var nombreCompleto2 = 'Pedro' +' '+ 'Ramirez';
console.log(nombreCompleto2);

// en esta operacion se concatena como string
var cadenaConNumero = nombre + 235;
console.log(cadenaConNumero);
console.log(typeof cadenaConNumero);

// en este caso, primero suma y luego concatena
cadenaConNumero = nombre + (2 + 4);
console.log(cadenaConNumero);
console.log(typeof cadenaConNumero);

// similar al anterior, ya que se evalua de izquierda a derecha
// A ESTO SE LE LLAMA CONTEXTO DE CADENA
// STRING CONTEXT
cadenaConNumero = 9 + 5 + nombre;
console.log(cadenaConNumero);
console.log(typeof cadenaConNumero);
