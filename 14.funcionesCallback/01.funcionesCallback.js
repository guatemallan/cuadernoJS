/**
 * FUNCIONES CALLBACK
 * Son utiles en las 'PROMESAS'
 * La ejecución de estas funciones es asíncrono, es decir que la funcion callback inicia otro hilo, mientras que la funcion original permanece en el anterior. 
 */


// la ejecución es secuenciál, línea a línea
miFuncionUno();
miFuncionDos();
miFuncionDos();
miFuncionUno();
// hoisting

// funcion clasica
function miFuncionUno(){
    console.log('Función UNO!');
}
function miFuncionDos(){
    console.log('Función DOS!');
}


/**
 * FUNCION CALLBACK
 * Se pasa como variable, y se usa (invoca) desde el cuerpo de la función
 */
function imprimir(mensaje){
    console.log(mensaje);
}
function sumar(operadorUno, operadorDos, miFuncionCallback){
    let res = operadorUno + operadorDos;
    miFuncionCallback(`Resultado: ${res}`);
} 

// llamada
// pasamos los operadores y la funcion imprimir para usarla dentro de la funcion sumar
sumar(5,3, imprimir);


