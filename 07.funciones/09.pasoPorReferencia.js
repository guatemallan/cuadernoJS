// PASO POR REFERENCIA (BY REFERENCE)

// la constante 'persona' es un objeto, y los valores de los objetos se pasan por referencia
const persona = {
    nombre: 'Juan',
    apellido : 'García',
    edad: 30
};

console.log(persona);

function cambiarValorObjeto(p){
    p.nombre = 'Pedro';
    p.apellido = 'Pérez';
    p.edad = 25;
    //aquí hay un return implícito
}

// a pesar de que intentamos cambiar el valor, sí funcionó
cambiarValorObjeto(persona);
console.log(persona);
// esto es porque se pasó la referencia del objeto persona, no una copia del mismo
// se cambió el valor de las propiedades del objeto persona, y persona y p están relacionadas
// la variable p no existe fuera de la funcion, se destruye al finalizar la función, pero el objeto persona sigue existiendo y se modificó su valor
console.log(p);