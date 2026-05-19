let persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
};

// Acceso a las propiedades del objeto
console.log(persona.nombre); // Output: Juan
console.log(persona["edad"]); // Output: 30

// Intento de acceso a una propiedad que no existe
console.log(persona.pais); // Output: undefined

// acceso por medio de corchetes
console.log(persona["ciudad"]); // Output: Madrid

// "for-in" para recorrer las propiedades del objeto
for (let nombrePropiedad in persona) {
    console.log(nombrePropiedad + ": " + persona[nombrePropiedad]);
}