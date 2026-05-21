// OBJETOS
// Un objeto es una colección de propiedades, cada propiedad tiene un nombre y un valor.
// En JS, casi todo es un objeto

let x = 10; // x es de tipo primitivo
console.log(typeof x); // "number"
console.log(x.length); // undefined, los tipos primitivos no tienen propiedades

// se le asigna una referencia en memoria de tipo hexadecimal, (ej 0x12345678) a la variable x, y se le asigna el valor 10 a esa referencia en memoria
// cuando se accede a x.length, JS crea un objeto temporal de tipo Number, asigna el valor de x a ese objeto temporal, y luego intenta acceder a la propiedad length de ese objeto temporal, pero como los objetos de tipo Number no tienen la propiedad length, devuelve undefined
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
    // la palabra reservada this hace referencia al objeto actual, en este caso, al objeto persona. Se utiliza para acceder a las propiedades y métodos del mismo objeto desde dentro de sus métodos. En el método nombreCompleto, this.nombre se refiere a la propiedad nombre del objeto persona, y this.apellido se refiere a la propiedad apellido del mismo objeto. En el método saludar, this.nombreCompleto() llama al método nombreCompleto del mismo objeto para obtener el nombre completo de la persona.
};

// para acceder a las propiedades de un objeto, se puede usar la notación de punto o la notación de corchetes
console.log(persona.nombre); // "Juan"
console.log(persona["edad"]); // 30

// para llamar a un método de un objeto, se usa la notación de punto
console.log(persona.nombreCompleto()); // "Juan Pérez"
persona.saludar(); // "Hola, mi nombre es Juan Pérez"

