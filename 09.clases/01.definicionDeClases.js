/* CLASES
Las clases en JavaScript son una forma de definir objetos y su comportamiento utilizando una sintaxis más clara y estructurada. Básicamente son plantillas para objetos. Las clases se introdujeron en ECMAScript 2015 (ES6) y proporcionan una manera más fácil de crear objetos y manejar la herencia.

Características principales:
- Nombre de la clase
- Atributos y constructor
- Métodos
*/

// SINTAXIS BÁSICA DE CLASES

// Nombre de la clase
class Persona {
    // Cosntructor y parametros
    // si no se define el constructor, JS agrega uno vacío
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
    // Metodos
}

// SINTAXIS PARA CREACION DE OBJETOS en base a la clase
let personaUno = new Persona('Juan', 'Perez');
console.log(personaUno);

let personaDos = new Persona('Maria', 'Gomez');
console.log(personaDos);
