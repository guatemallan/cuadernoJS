/* Clases y Hoisting

Con los objetos, podemos utilizar hoisting. Es decir, podemos referenciar objetos que han sido definidos lineas abajo en el código. Con las clases, esto no es posible.
*/

// Tratamos de utilizar el hositing
let personaUno = new Persona('Maria', 'Ordonez'); // Error: Cannot access 'Persona' before initialization
 
class Persona {
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }
}

let personaDos = new Persona('Maria', 'Ordonez'); 
console.log(personaDos);