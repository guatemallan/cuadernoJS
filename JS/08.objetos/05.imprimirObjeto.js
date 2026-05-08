let persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
};

// 1 forma
console.log(persona); // Output: { nombre: 'Juan', edad: 30, ciudad: 'Madrid' }

// En algunos navegadores, como Chrome, al imprimir un objeto en la consola, se muestra una representación interactiva del objeto que permite expandir y contraer sus propiedades. Sin embargo, en otros navegadores, como Firefox, se muestra una representación más simple del objeto sin la capacidad de expandir o contraer sus propiedades.
// En otras ocasiones, solo podriamos recibir 'Object' o '[object Object]' como resultado al imprimir un objeto en la consola

// 2. otra forma seria concatenar las propiedades
console.log("Nombre: " + persona.nombre + ", Edad: " + persona.edad + ", Ciudad: " + persona.ciudad);

// 3. tambien se puede usar un bucle 'for-in'
for (let nombrePropiedad in persona) {
    console.log(nombrePropiedad + ": " + persona[nombrePropiedad]);
}

// 4. Metodo Object.values(), convierte el objeto a un array con los valores de sus propiedades
let personaArray = Object.values(persona);
console.log(personaArray); // Output: [ 'Juan', 30, 'Madrid' ]

// 5. Metodo JSON.stringify(), convierte el objeto a una cadena string formato JSON
let personaString = JSON.stringify(persona);
console.log(personaString); // Output: {"nombre":"Juan","edad":30,"ciudad":"Madrid"}    