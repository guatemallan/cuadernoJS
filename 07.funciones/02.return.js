// Uso de Return
// permite devolver el resultado de la ejecución de la funcion a la porción de código desde donde se invocó

function miSuma(a, b){
    return a + b;
}

let resultado = miSuma(544, 234);

console.log(resultado);

// si no agregamos la palabra return, JS agrega de manera implicita un return vacío.