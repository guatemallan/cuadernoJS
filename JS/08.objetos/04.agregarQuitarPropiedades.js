let persona = {    
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"    
};

// AGREGAR una nueva propiedad al objeto
persona.pais = "España";
console.log(persona.pais); // Output: España

// se debe tener cuidado al agregar propiedades a objetos, ya que si se agrega una propiedad con el mismo nombre que una propiedad existente, se sobrescribirá el valor de la propiedad existente. Por ejemplo: 
persona.nombre = "Pedro";
console.log(persona.nombre); // Output: Pedro

// tambien, si cometemos un error tipográfico al agregar una propiedad, se creará una nueva propiedad en lugar de modificar la propiedad existente. Por ejemplo:
persona.nombree = "Maria";
console.log(persona.nombree); // Output: Maria
console.log(persona.nombre); // Output: Pedro

// QUITAR una propiedad del objeto
delete persona.edad;
console.log(persona.edad); // Output: undefined

// Intento de eliminar una propiedad que no existe
delete persona.altura; // No genera error, simplemente no hace nada
console.log(persona.altura); // Output: undefined