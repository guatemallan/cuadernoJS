// FUNCIONES
// una funcion es codigo reutilizable, basicamente
// y se puede invocar tantas veces como sea necesario

// Hoisting
miFuncion(342, 322);
// por este concepto, no importa si declaramos la funcion después, el compilador mueve la declaración al encabezado para que se pueda ejecutar en cualquier lugar


// Declaración
// mismo estandar para nombrar variables (camelCase)
function miFuncion(a, b){
    console.log('Suma: ' + (a + b));
} // el bloque de codigo no lleva ";""

// Invocación
miFuncion(5, 3); //linea ejecutable, si lleva ";" 