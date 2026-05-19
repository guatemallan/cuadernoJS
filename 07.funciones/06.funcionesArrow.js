// FUNCIONES ARROW echma script 6

// declaración tipo expresión
let x = function (a, b){return a+b};

let resultado = x(3, 5);
console.log(resultado);

// tipo flecha
// es recomendable declarar como funcion para evitar modificacion
// no es necesario usar: la palabra function, llaves, ni la palabra return.
const sumarFuncionTipoFlecha = (a,b) => a + b;

resultado = sumarFuncionTipoFlecha(400,35);
console.log(resultado);