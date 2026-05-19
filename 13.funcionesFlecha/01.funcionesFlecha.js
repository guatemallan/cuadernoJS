/**
 * FUNCIONES FLECHA
 * 
 */

// sintaxis clásica de una función
function miFuncion(){
    console.log('Saludos desde mi funcion!');
}

miFuncion(); //'Saludos desde mi funcion!'

// funciones como una variable, anonima (No tiene nombre)
let miVariableFuncion = function(){
    console.log('Saludos desde mi otra función anónima en variable!')
}

miVariableFuncion(); // 'Saludos desde mi otra función anónima en variable!'

/**
 * FUNCIONES FLECHA Return void
 * Se declara como una variable o una constante y se usa el operador flecha [=>]
 * Estas tipo de funciones no se pueden usar con hoisting (Uso antes de la declaración)
 * Es común usar Const y no una variable, porque no se intentará volver a modificarla
 */
const miFuncionFlecha = () => {
    console.log('Saludos desde mi función flecha!'); 
}

miFuncionFlecha(); // 'Saludos desde mi función flecha!'

/**
 * FUNCION FLECHA Return void
 * Declaración en una línea
 */
const miFuncionFlechaUnaLinea = () => console.log('Saludos desde mi función flecha de una linea');

miFuncionFlechaUnaLinea(); // Saludos desde mi función flecha de una linea

/** 
 * FUNCION FLECHA con return string
 */
const saludar = () =>  'Saludos desde una funcion flecha con return string';

console.log(saludar()); // 'Saludos desde una funcion flecha con return string'

/**
 * FUNCION FLECHA con return object
 */
const funcionRegresaObjeto = () => ({nombre: 'Juan', apellido: 'Cordon'});

console.log(funcionRegresaObjeto()); // { nombre: 'Juan', apellido: 'Cordon' }

/**
 * FUNCION FLECHA con parametro
 * Si solo tenemos un parámetro, se omite el paréntesis
 * Si son varios, usamos parámetros
 */
const funcionFlechaParametros = mensaje => console.log(mensaje);

funcionFlechaParametros('Imprimiendo el parámetro desde una función flecha'); // Imprimiendo el parámetro desde una función flecha

/**
 * FUNCION FLECHA Suma con varios parámetros
 */
const funcionFlechaVariosParemetros = (operadorUno, operadorDos) => operadorUno + operadorDos;

console.log(funcionFlechaVariosParemetros(3,5)); // 8