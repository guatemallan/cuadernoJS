// ARGUMENTOS Y PARAMETROS

// PARAMETROS
// es la lista de variables que recibe una funcion
function miSuma(a, b){
    return a + b;
}
// ARGUMENTOS
// Son los valores que asignamos a los parametros de una funcion
let resultado = miSuma(3, 5);
console.log(resultado);

/////////////////

const sumar = function(a,b){
    // arguments es un arreglo, y lo podemos manejar como tal:
    console.log(arguments[0]);
    console.log(arguments[1]);
    return a + b;
}

// JS nos permite omitir argumentos, y se quedan como undefined
resultado = sumar(3);
console.log(resultado);

////////////////////
// para evitar errores como el NaN anterior se pueden asignar valores predeterminados
const restar = function(a=100,b=0){
    console.log(arguments[0]);
    console.log(arguments[1]);
    // se puede acceder a otro argumento, aunque no haya sido definido...
    console.log(arguments[2]);
    return a - b;
}

resultado = restar(300);
console.log(resultado);

// y si lo asignamos, aunque no se haya definido, se asigna al siguiente argumento
resultado = restar(900,300,8);
console.log(resultado);

/// Ejercicio

// es buena practica agregar espacio despues de cada coma
resultado = sumarTodosLosArgumentos(5, 413, 20, 10, 9, 8, 75);

function sumarTodosLosArgumentos(){
    let sumaTotal = 0;
    for(contador = 0; contador < arguments.length; contador++){
        sumaTotal += arguments[contador];
    }
    return sumaTotal;
}

console.log(resultado);