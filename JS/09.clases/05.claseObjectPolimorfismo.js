/* CLASE OBJECT

La clase Object es la clase padre de cualquier clase en JS. Aunque nosotros no extendamos explicitamente, en JS hay un extends implicito de cualquier clase a la clase Object. 

class Persona extends Object{}
*/

// CONTINUA ABAJO

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
    nombreCompleto(){
        return this._nombre + ' ' + this._apellido;
    }

    // Sobreescritura del método toString por medio de PROTOTYPE
    toString(){
        return this.nombreCompleto();
    }
}
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
    nombreCompleto(){
        return super.nombreCompleto() + ', departamento: ' + this._departamento;
    }
}

// MÉTODOS DE OBJECT
// toString()
let personaUno = new Persona('Luis', 'Carlos');
// en algunos navegadores vamos a obtener '[object Object]' al utilizar .toString()
// por lo anterior, es buena practica SOBREESCRIBIR el método toString()
console.log(personaUno.toString());

// POLIMORFISMO
let empleadoUno = new Empleado('Carlos', 'Lopez', 'Mantenimiento');
/*
 La function toString() incluye una llamada al método nombreCompleto().
Estamos utilizando el método 'nombreCompleto()' desde la clase Persona o desde la clase Empleado?
A esto se le conoce como polimorfismo, ya que podemos acceder a métodos de las clases hijas o padres sin hacer distinción. En este caso es el método en la clase hijo, porque incluye el departamento. 
En el ejemplo anterior con Luis Carlos, no incluye departamento, ya que NO incluye departamento.

Polimorfismo: multiples formas de ejecución. El método que se ejecuta depende de si se hace referencia de tipo padre o de tipo hijo.
*/
console.log(empleadoUno.toString());
