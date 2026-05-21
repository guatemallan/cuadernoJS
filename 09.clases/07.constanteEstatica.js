/* SIMULACION CONSTANTE ESTATICA
Dentro de la definición de una clase no es posible usar la palabra CONST. Entonces, podemos simular con el uso de un metodo estático.
*/

class Persona {
    static contadorPersonas = 0;

    // simulación de una variable CONST
    static get MAX_OBJ(){
        // máximo de objetos a instanciar de esta clase
        return 5;
    }

    constructor(nombre, apellido){
        // Manejo de limitación, la limitación se puede lograr lanzando una excepción, que vermos mas adelante
        if (Persona.contadorPersonas < Persona.MAX_OBJ){
            this._nombre = nombre;
            this._apellido = apellido;
            this._idPersona = ++Persona.contadorPersonas;
        } else {
            console.log('Se ha alcanzado el máximo de objetos Personas permitido.');
        }
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
    nombreCompleto(){
        return this._idPersona + ' ' + this._nombre + ' ' + this._apellido;
    }
    toString(){
        return this.nombreCompleto();
    }
    // DEFINICIÓN DE MÉTODO ESTÁTICO
    static saludar(){
        console.log('Saludos desde método static!');
    }
    // MÉTODO ESTÁTICO con parametro Objeto
    static saludarPersona(persona){
        console.log('Hola ' + persona.nombre + ', te saludo desde un método static!');
    }
}
class Empleado extends Persona{
    static contadorObjetosEmpleado = 0;
    constructor(nombre, apellido, departamento){
        super(nombre,apellido);
        this._departamento = departamento;
        Empleado.contadorObjetosEmpleado++;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
    nombreCompleto(){
        return super.nombreCompleto() + ', departamento: ' + this._departamento;
    }
}

//

let personaUno = new Persona ('Mario', 'Martinez');
console.log(personaUno.nombreCompleto()); // 1 Mario Martinez

let empleadoUno = new Empleado ('Ana', 'Lopez', 'Contabilidad');
console.log(empleadoUno.nombreCompleto()); //'2 Ana Lopez, departamento: Contabilidad'

let personaDos = new Persona ('Juan', 'Perez');
console.log(personaDos.nombreCompleto()); // '3 Juan Perez'

// Simulación de constante estática
console.log(Persona.MAX_OBJ); //5
Persona.MAX_OBJ = 10; // No hay error
console.log(Persona.MAX_OBJ); //5, el valor permanece constante

let personaTres = new Persona('Pedro', 'Gonzalez');
console.log(personaTres.nombreCompleto()); // 4

let empleadoDos = new Empleado('Marta', 'Gomez', 'Física Nuclear');
console.log(empleadoDos.nombreCompleto()); // 5

let personaCuatro = new Persona('Jeremías', 'Martinez'); // Se ha alcanzado el máximo de objetos Personas permitido.
console.log(Persona.contadorPersonas); //5, se mantiene en 5 debido a la restricción
console.log(personaCuatro.nombreCompleto()); // 'undefined undefined undefined'

