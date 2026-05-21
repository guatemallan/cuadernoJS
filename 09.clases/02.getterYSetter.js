/* METODOS GET Y SET

Se utilizan para acceder y modificar los atributos de un objeto instanciado a partir de una clase. No son necesarios, se puede acceder a los atributos directamente, pero es una buena clase utilizarlos.
*/

class Persona {
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    /* GET
    Los metodos get y set no pueden tener el mismo nombre que los atributos, por lo que se acostumbra a colocar un guion bajo (_) a los nombres de los atributos
    El error sería: 
        Cannot set property nombre of #<Persona> which has only a getter
    */
    get nombre(){
        return this._nombre;
    }

    // SET
    set nombre(nombre){
        this._nombre = nombre;
    }
}

let personaUno = new Persona('Juan','Perez');
console.log(personaUno);

// Utilizamos el getter
console.log(personaUno.nombre);

// Utilizamos el setter
personaUno.nombre = 'JuanJo';
console.log(personaUno.nombre);