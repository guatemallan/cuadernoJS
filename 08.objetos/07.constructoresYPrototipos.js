/* CONSTRUCTORES
los constructores son funciones que se utilizan para crear objetos con una estructura similar, de esta manera permiten reutilizar código.
Se recomienda que los nombres de los metodos constructores comiencen con mayúscula para diferenciarlos de las funciones regulares.  y se utilizan con la palabra clave "new".
*/

// Función constructora para crear objetos de tipo Persona
function Persona(nombre, edad, ciudad, email){
    // el nombre de la variable o propiedad del objeto es igual al nombre del parametro, pero se diferencia por el uso de "this" para referirse a la propiedad del objeto que se está creando. Esto es una práctica común
    this.nombre = nombre;
    this.edad = edad;
    this.ciudad = ciudad;
    this.email = email;
}

// Crear un nuevo objeto de tipo Persona utilizando el constructor
let padre = new Persona("Carlos", 50, "Barcelona", "carlos@barcelona.net");
console.log(padre); 

let madre = new Persona("Maria", 48, "Valencia", "maria@valencia.com");
console.log(madre);

padre.nombre = "Carlos García"; // Modificamos SOLO al objeto padre
console.log(padre); // El objeto padre ahora tiene el nombre actualizado.
console.log(madre); // El objeto madre sigue teniendo el nombre original, demostrando que cada objeto creado con el constructor es independiente.

// si queremos cambiar características a todos los objetos de tipo Persona, debemos modiicar el constructor, por ejemplo, si queremos   agregar un nuevo atributo "profesion" a todos los objetos de tipo Persona, podemos modificar el constructor de la siguiente manera:

function Persona(nombre, edad, ciudad, email, profesion){
    this.nombre = nombre;
    this.edad = edad;
    this.ciudad = ciudad;
    this.email = email;
    this.profesion = profesion; // Nuevo atributo agregado al constructor

    // 'Ejemplo Método' para mostrar la información completa de la persona
    this.nombreYProfesion = function() {
        return 'Nombre: ' + this.nombre + ' , Profesión: '  + this.profesion;
    }
}

// Ahora, al crear nuevos objetos de tipo Persona, debemos proporcionar un valor para el nuevo atributo "profesion":

let hermano = new Persona("Luis", 25, "Sevilla", "luis@sevilla.com", "Ingeniero");
console.log(hermano); // El nuevo objeto hermano ahora incluye el atributo profesion con el valor "Ingeniero"

// Sin embargo, los objetos padre y madre que ya fueron creados antes de la modificación del constructor no tendrán el nuevo atributo "profesion", lo que demuestra que cada objeto creado con el constructor es independiente y no se ve afectado por cambios posteriores en el constructor.
console.log(padre); // El objeto padre no tiene el atributo profesion.
console.log(madre); // El objeto madre no tiene el atributo profesion.

// tambien podemos extender las propiedades con metodos, ir a 'Ejemplo Metodo'}`
// NOTE: no olvidad () después del nombre de la funcion.
console.log(padre.nombreYProfesion());

///////////////////////////////////

/* CONSTRUTORES DE OBJETOS Y MEJORES PRACTICAS
A continuación vemos es la sintaxis formal.
Sin embargo, esta sintaxis es menos común y no se recomienda en la mayoría de los casos debido a su verbosidad y a que puede llevar a confusión con los tipos primitivos. En su lugar, es más común utilizar la sintaxis literal para crear objetos, cadenas, números, booleanos, arreglos y funciones.
*/

var miObjeto = new Object(); // Crea un nuevo objeto utilizando el constructor Object
let miCadena = new String("Hola Mundo");
let miNumero = new Number(42);
let miBooleano = new Boolean(true);
let miArreglo = new Array(1, 2, 3, 4, 5);
let miFuncion = new Function("a", "b", "return a + b;");

// esta es la sintaxis mas comun y recomendada
let miObjeto2 = {};
let miCadena2 = "Hola Mundo";
let miNumero2 = 42;
let miBooleano2 = true;
let miArreglo2 = [1, 2, 3, 4, 5];
let miFuncion2 = function(a, b) {
    return a + b;
};

//////////////////////////////////////

/* PROTOTIPOS
Los prototipos son una característica fundamental en JavaScript que permite a los objetos heredar propiedades y métodos de otros objetos. Cada objeto en JavaScript tiene un prototipo, que es otro objeto del cual hereda propiedades y métodos. Esto permite la reutilización de código y la creación de jerarquías de objetos.
*/

padre.telefono = "123456789"; // Agregamos una nueva propiedad al objeto padre
console.log(padre.telefono); // El objeto padre ahora tiene la propiedad telefono.
console.log(madre.telefono); // El objeto madre no tiene la propiedad telefono, ya que no se ha agregado a su prototipo.
console.log(hermano.telefono); // El objeto hermano no tiene la propiedad telefono, ya que no se ha agregado a su prototipo.

// Para agregar una propiedad o método a todos los objetos creados con el constructor Persona, podemos agregarlo al prototipo del constructor:

Persona.prototype.telefono = "123456789"; // Agregamos la propiedad telefono al prototipo del constructor Persona

console.log(padre.telefono); // El objeto padre ahora tiene la propiedad telefono heredada del prototipo.
console.log(madre.telefono); // El objeto madre ahora tiene la propiedad telefono heredada del prototipo.
console.log(hermano.telefono); // El objeto hermano ahora tiene la propiedad telefono heredada del prototipo.

///////////////////

