/**
 * Refuerzo de concepto de sobreescritura y polimorfismo
*/

// SOBREESCRITURA

class Empleado{
    constructor(nombre, salario){
        this._nombre = nombre;
        this._salario = salario;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get salario(){
        return this._salario;
    }
    set salario(salario){
        this._salario = salario;
    }
    obtenerDetalles(){
        return `Empleado: Nombre = ${this._nombre}, Salario = ${this._salario}`
    }
}
class Gerente extends Empleado{
    constructor(nombre, salario, departamento){
        super(nombre, salario);
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
    // sobreescritura, se extiende la funcionalidad de la clase padre
    obtenerDetalles(){
        return `Gerente: Departamento = ${this._departamento}, ${super.obtenerDetalles()}`;
    }
}

// prueba de sobreescritura

let empleadoUno = new Empleado('Luis Lopez', 4000);
console.log(empleadoUno.obtenerDetalles());

let gerenteUno = new Gerente('Mario Martinez', 5000, 'Sistemas');
console.log(gerenteUno.obtenerDetalles());

// POLIMORFISMO

// el metodo a ejecutarse depende del "tipo" de objeto que enviemos
// a esto se le conoce como polimorfismo
function imprimir(tipo){
    console.log(tipo.obtenerDetalles());
}

imprimir(empleadoUno); // Invoca la función en clase padre "Empleado": 'Empleado: Nombre = Luis Lopez, Salario = 4000'
imprimir(gerenteUno); // Invoca la función en clase hija "Gerente": 'Gerente: Departamento = Sistemas, Empleado: Nombre = Mario Martinez, Salario = 5000'

// El "tipo" se determina hasta el momento de ejecución, cuando enviamos un objeto

// INSTANCE OFF
// para distinguir el tipo, podemos usar la funcion instanceof

function imprimirConTipo(tipo){
    console.log(tipo.obtenerDetalles());
    if (tipo instanceof Gerente){
        console.log('Es de tipo Gerente!');
    } //else 
        if (tipo instanceof Empleado){
        console.log('Es de tipo Empleado!')
    } //else 
        if (tipo instanceof Object){
        console.log('Es de tipo Object!')
    }
}

imprimirConTipo(empleadoUno); // No incluye etiqueta de gerente y Object
imprimirConTipo(gerenteUno); // Incluye etiquetas Gerente, Empleado y Object
// la clase object es la madre de todas las clases