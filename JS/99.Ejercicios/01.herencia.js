/* EJERCICIO HERENCIA

aplicar herencia, sobrecarga y polimorfismo

new Date();
*/

class Persona{
    static contadorPersonas = 0;

    constructor (nombre, apellido, edad){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._idPersona = ++Persona.contadorPersonas;
    }
    get idPersona(){
        return this._idPersona;
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
    get edad(){
        return this._edad;
    }
    set edad(edad){
        this._edad = edad;
    }
    // sobrecarga toString()
    toString(){
        return 'idPersona: ' + this.idPersona 
        + ', Nombre: ' + this._nombre
        + ', Apellido: ' + this._apellido
        + ', Edad: ' + this._edad
        ;
    }
}

class Empleado extends Persona{
    static contadorEmpleados = 0;
    constructor (nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad);
        this._sueldo = sueldo;
        this._idEmpleado = ++Empleado.contadorEmpleados;
    }
    get idEmpleado(){
        return this._idEmpleado;
    }
    get sueldo(){
        return this._sueldo;
    }
    set sueldo(sueldo){
        this._sueldo = sueldo;
    }
    // sobrecarga toString()
    toString(){
        // no olvidad paréntesis, se llama a una funcion
       return super.toString() 
        + ', idEmpleado: ' + this._idEmpleado 
        + ', Sueldo: ' + this._sueldo
        ;
    }
}

class Cliente extends Persona{
    static contadorClientes = 0;
    constructor (nombre, apellido, edad){
        super(nombre, apellido, edad);
        this._fechaRegistro = new Date();
        this._idCliente = ++Cliente.contadorClientes;
    }
    get idCliente(){
        return this._idCliente;
    }
    get fechaRegistro(){
        return this._fechaRegistro;
    }
    set fechaRegistro(fecha){
        this._fechaRegistro = fecha;
    }
    toString(){
        return super.toString()
        + ', idCliente: ' + this._idCliente
        + ', Fecha de Registro: ' + this._fechaRegistro
        ;
    }
}

// prueba Persona
console.log(Persona.contadorPersonas); // 0
let personaUno = new Persona ('Ana', 'Martinez', 28);
console.log(personaUno.toString()); // 'idPersona: 1, Nombre: Ana, Apellido: Martinez, Edad: 28'

// pruena Empleado
console.log(Empleado.contadorPersonas); // 1
console.log(Empleado.contadorEmpleados); // 0
let empleadoUno = new Empleado ('Mario', 'Lopez', 22, 1500.00);
 console.log(empleadoUno.toString()); // 'idPersona: 2, Nombre: Mario, Apellido: Lopez, Edad: 22, idEmpleado: 1, Sueldo: 1500'

// pruena Cliente
console.log(Cliente.contadorPersonas); // 2
console.log(Cliente.contadorEmpleados); // undefined
console.log(Cliente.contadorClientes); // 0
let clienteUno = new Cliente ('Luis', 'Reyes', 35);
 console.log(clienteUno.toString()); // 'idPersona: 3, Nombre: Luis, Apellido: Reyes, Edad: 35, idCliente: 1, Fecha de Registro: Thu May 07 2026 17:24:16 GMT-0600 (heure normale du centre nord-américain)'
