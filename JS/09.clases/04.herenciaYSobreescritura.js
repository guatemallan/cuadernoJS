/* HERENCIA

Se refiere a la habilidad de heredar características de una clase padre a clases hijas. Esta funcionalidad es fundamental en OOO, y ayuda en al reutalización de código.

    umletino.com -> herramienta gratuita UML
*/

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
    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    // HERENCIA DE METODOS
    // Nota: en las clases no se necesita espeficar la palabra 'function'. Se sobre entiende.
    nombreCompleto(){
        return this._nombre + ' ' + this._apellido;
    }
}

// extendemos empleado desde persona
// class Empleado extends Persona{
//     constructor(departamento){
//         // aqui faltan los parametros de la clase padre... veremos
//         this._departamento = departamento;
//     }
//     get departamento(){
//         return this._departamento;
//     }
//     set departamento(departamento){
//         this._departamento = departamento;
//     }
// }

let personaUno = new Persona('Juan', 'Rodriguez');
console.log(personaUno);

// let empleadoUno = new Empleado(); // ERROR: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
// este error pasa porque no estamos especificando los valores para los atributos de la clase padre. Estos se deben especificar en la clase hija con la palabra SUPER


// extendemos empleado desde persona
class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre,apellido);
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }

    // SOBREESCRITURA
    nombreCompleto(){
        // podemos volver a escribir el codigo, pero no siempre es eficiente
        // return this._nombre + ' ' + this._apellido + ', departamento: ' + this._departamento;

        // con SUPER accedemos al resultado de la funcion original
        return super.nombreCompleto() + ', departamento: ' + this._departamento;
    }
}

// uso de la clase hija, con herencia
let empleadoDos = new Empleado('Maria', 'Ruiz', 'Contabilidad');
console.log(empleadoDos);

// accesso a getters y setters de la clase padre
console.log(empleadoDos.nombre);
empleadoDos.nombre = 'Maria Luz';
console.log(empleadoDos.nombre);

// HERENCIA DE METODOS Y SOBREESCRITURA
// este metodo esta definido en la clase padre Persona,
// fue extendido en clase hija con departamento
console.log(empleadoDos.nombreCompleto());
