// POR VALOR (BY VALUE)

//valor primitivo, no tiene atributos ni métodos
let x = 10;

// paso por valor
function cambiarValor(a){
    a = 20;
    //aquí hay un return implícito
}

// a pesar de que intentamos cambiar el valor, no funcionó
cambiarValor(x);
console.log(x);
// esto es porque solo se pasó el valor de x, no la variable x realmente
// se cambió el valor de la variable a, pero x y a no están relacionadas
console.log(a); // esta variable se destruye al terminar la función

