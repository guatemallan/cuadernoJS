// ARREGLOS EN JS

// Es un tipo OBJECT que permite almacenar múltiples valores en una sola variable. Los arreglos son útiles para organizar datos relacionados y realizar operaciones sobre ellos de manera eficiente.

// Declaracion antigua de arreglos, no es recomendable usarla, pero sigue siendo válida.
// let autos = new Array('BMW', 'Mercedes', 'Audi', 'Toyota', 'Honda');

// Declaración de un arreglo con 5 elementos
let autos = ['BMW', 'Mercedes', 'Audi', 'Toyota', 'Honda'];

console.log(autos); // Imprime el arreglo completo
console.log(autos[0]); // Imprime el primer elemento del arreglo (BMW)
console.log(autos[2]); // Imprime el tercer elemento del arreglo (Audi)

// uso de ciclos para recorrer un arreglo
for (let i = 0; i < autos.length; i++) {
    console.log('Elemento ' + i + ': ' + autos[i]); // Imprime cada elemento del arreglo
}

// modificar un elemento del arreglo
autos[1] = 'Mercedes-Benz'; // Cambia el segundo elemento del arreglo a 'Mercedes-Benz'
console.log(autos); // Imprime el arreglo modificado

// PUSH Agregar un nuevo elemento al final del arreglo
autos.push('Nissan'); // Agrega 'Nissan' al final del arreglo
console.log(autos); // Imprime el arreglo con el nuevo elemento

// POP Elimina el último elemento del arreglo
let ultimoAuto = autos.pop(); // Elimina el último elemento del arreglo y lo almacena en la variable ultimoAuto
console.log(ultimoAuto); // Imprime el auto eliminado (Nissan)
console.log(autos); // Imprime el arreglo después de eliminar el último elemento

// SHIFT Elimina el primer elemento del arreglo
let primerAuto = autos.shift(); // Elimina el primer elemento del arreglo y lo almacena en la variable primerAuto
console.log(primerAuto); // Imprime el auto eliminado (BMW)
console.log(autos); // Imprime el arreglo después de eliminar el primer elemento

// UNSHIFT Agrega un nuevo elemento al inicio del arreglo
autos.unshift('Volkswagen'); // Agrega 'Volkswagen' al inicio del arreglo
console.log(autos); // Imprime el arreglo con el nuevo elemento al inicio

// SPLICE Elimina elementos de un arreglo y opcionalmente agrega nuevos elementos
// El primer parámetro es el índice desde donde se comenzará a eliminar, el segundo parámetro es la cantidad de elementos a eliminar, y los siguientes parámetros son los nuevos elementos a agregar (opcional).
autos.splice(2, 1, 'Ferrari'); // Elimina 1 elemento a partir del índice 2 (Audi) y agrega 'Ferrari' en su lugar
console.log(autos); // Imprime el arreglo después de la operación splice

// SLICE Crea un nuevo arreglo a partir de una porción del arreglo original
// El primer parámetro es el índice de inicio (inclusive) y el segundo parámetro es el índice de fin (exclusive).
let nuevosAutos = autos.slice(1, 4); // Crea un nuevo arreglo con los elementos desde el índice 1 hasta el índice 3 (Mercedes-Benz, Ferrari, Toyota)
console.log(nuevosAutos); // Imprime el nuevo arreglo creado con slice
console.log(autos); // Imprime el arreglo original para mostrar que no ha sido modificado por slice 

