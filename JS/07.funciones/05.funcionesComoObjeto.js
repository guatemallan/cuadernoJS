// una funcion es un tipo de dato

function miSuma(a, b){
    return a + b;
}

console.log(typeof miSuma);

// saber cuantos argumentos tiene una funcion

function miResta(a,b){
    // este código solo se puede invocar en el bloque de codigo de la función
    console.log('Argumentos función miResta(): ' + arguments.length);
    return a - b;
}

let resultado = miResta(8, 3);
console.log(resultado);

//las funciones tienen propiedades y metodos 
// una propiedad es por ejemplo, cuantos argumentos tiene (arguments)
// un metodo (funciones):

let miRestaTexto = miResta.toString();

console.log(miRestaTexto);
