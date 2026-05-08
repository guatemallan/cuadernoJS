// Otras formas de agregar elementos en un arreglo

let autos = ['BMW', 'Mercedes', 'Audi', 'Toyota', 'Honda'];

console.log(autos.length); // Imprime la longitud del arreglo (5)

// es mejor usar Push
autos[autos.length] = 'Volvo'; // Agrega 'Volvo' al final del arreglo
console.log(autos); // Imprime el arreglo actualizado con 'Volvo' al final

// se pueden dejar indices vacíos, pero NO ES RECOMENDABLE
autos[60] = 'Mazda'; // Agrega 'Mazda' en el índice 60, dejando índices vacíos entre el 6 y el 60
console.log(autos); // Imprime el arreglo con 'Mazda' en el índice 10 y elementos vacíos entre el 6 y el 60
console.log(autos.length); // Imprime la longitud del arreglo (61), ya que el índice más alto es 60, aunque hay elementos vacíos    


// COMO SABER SI UNA VARIABLE ES UN ARREGLO

console.log(typeof autos); // no nos sirve

comsole.log(Array.isArray(autos)); // true, esta es la forma correcta de verificar si una variable es un arreglo

console.log(autos instanceof Array); // true, esta es otra forma de verificar si una variable es un arreglo, pero no es tan recomendable como Array.isArray() porque puede dar resultados incorrectos en algunos casos (por ejemplo, si se usan iframes o contextos diferentes)
