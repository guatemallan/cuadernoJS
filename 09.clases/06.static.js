/* MÉTODOS Y ATRIBUTOS STATIC
Con STATIC logramos asociar metodos y atributos exclusivos a una clase

Los atributos NO STATIC se asocian con los objetos (instancias) y no con la clase
*/

class Persona {
    // atributo No Estático
    email = 'email@default.ok';

    // atributo STATIC
    static contadorObjetosPersona = 0;
    // este atributo no se puede modificar de manera convencional en el constructor con codigo tipo 'this.contadorObjetosPersona++;', ya que el operador 'this' apunta al objeto instanciado, no a la clase. En cambio, usamos el nombre de la clase:
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        // this.contadorObjetosPersona++; // ERROR NaN
        Persona.contadorObjetosPersona++;
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

// Prueba de método Static

let personaUno = new Persona('Luis', 'Carlos');
// personaUno.saludar(); // ERROR: personaUno.saludar is not a function
// Explicación: no es posible llamar un método static desde un objeto, pero se puede invocar desde la clase:
Persona.saludar();

// Prueba método static con argumento objeto
Persona.saludarPersona(personaUno);
// Persona.saludarPersona(); // ERROR: Cannot read properties of undefined (reading 'nombre')

// STATIC desde clase hija
let empleadoUno = new Empleado('Juan', 'Perez', 'Operaciones');

// empleadoUno.saludar(); // ERROR: empleadoUno.saludar is not a function
Empleado.saludar();

// Empleado.saludarPersona(); //Cannot read properties of undefined (reading 'nombre')
Empleado.saludarPersona(empleadoUno);
Empleado.saludarPersona(personaUno);

// Prueba atributos static

// el atributo se puede acceder unicamente desde la clase o clases hijas
console.log(personaUno.contadorObjetosPersona); // undefined
console.log(Persona.contadorObjetosPersona); // 2, dos instancias de la clase hasta este momento, personaUno y empleadoUno
console.log(Empleado.contadorObjetosPersona); // 2
console.log(Empleado.contadorObjetosEmpleado); // 1, solo una instancia de Empleado: empleadoUno

// Acceso atributo NO STATIC, no incluido en el constructor

console.log(personaUno.email); //'email@default.ok'
console.log(empleadoUno.email); //'email@default.ok'
console.log(Persona.email); // undefined
console.log(Empleado.email); // undefined

personaUno.email = 'email@luis.com';
console.log(personaUno.email); //'email@luis.com'
