// la primer manera es usando la sintaxis literal de objetos, que es la forma más común y sencilla de crear objetos en JavaScript. Se define un objeto utilizando llaves {} y se asignan propiedades y métodos dentro de esas llaves.
// esta es la fomra mas comun y sencilla

let persona = {
    nombre: "Juan",
    apellido: "Pérez",
    edad: 30,
    nombreCompleto: function() {
        return this.nombre + " " + this.apellido;
    },
    saludar: function() {
        console.log("Hola!, mi nombre es " + this.nombreCompleto());
    }
};

// la segunda manera es usando la función constructora Object(), que es una función incorporada en JavaScript que se utiliza para crear objetos y reservar espacio en memoria. Se puede crear un objeto vacío y luego agregarle propiedades y métodos.        

// creamos el objeto, reservamos espacio en memoria
// en este momento, el objeto esta vacio. No tiene propiedades ni métodos.
let persona2 = new Object();

// ahora le agregamos propiedades y métodos dinámicamente
persona2.nombre = "María";
persona2.apellido = "Gómez";
persona2.edad = 25;
persona2.nombreCompleto = function() {
    return this.nombre + " " + this.apellido;
};
persona2.saludar = function() {
    console.log("Hola!, mi nombre es " + this.nombreCompleto());
};

persona2.saludar(); // "Hola!, mi nombre es María Gómez"

// la tercera manera es usando una función constructora personalizada, que es una función que se define para crear objetos con una estructura específica. Se utiliza la palabra reservada new para crear instancias de esa función constructora. Esta forma es útil cuando se desea crear múltiples objetos con la misma estructura y comportamiento.

function Persona(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.nombreCompleto = function() {
        return this.nombre + " " + this.apellido;
    };
    this.saludar = function() {
        console.log("Hola!, mi nombre es " + this.nombreCompleto());
    };
}

// ahora podemos crear instancias de la función constructora Persona
let persona3 = new Persona("Carlos", "López", 40);
persona3.saludar(); // "Hola!, mi nombre es Carlos López"

let persona4 = new Persona("Ana", "Martínez", 35);
persona4.saludar(); // "Hola!, mi nombre es Ana Martínez"   