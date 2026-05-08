let persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid",
    email: "juan@madrid.com",
    // nombreCompleto: function() {
    //     return this.nombre + " " + this.apellido;
    // }

    // Método getter para obtener el nombre completo
    get nombreCompleto() {
        return this.nombre + " " + this.apellido;
    },

    // la buena practica es usar Mayusculas para leguajes
    idioma: "es gt",
    get lang() {
        return this.idioma.toUpperCase();
    },
    set lang(lang) {
        this.idioma = lang.toUpperCase();
    }
};

// console.log(persona.nombreCompleto()); //persona.nombreCompleto is not a function

console.log(persona.nombreCompleto); // Al usar el getter, no se necesitan paréntesis para acceder al valor calculado. 

console.log(persona.lang); // Al usar el getter, no se necesitan paréntesis para acceder al valor calculado.    


// probamos metodo SET lang
persona.lang = "en us"; // Al usar el setter, se asigna un nuevo valor a la propiedad idioma, convirtiéndolo a mayúsculas.
console.log(persona.lang); // Al usar el getter, no se necesitan paréntesis para acceder al valor calculado.
console.log(persona.idioma); // Accedemos directamente a la propiedad idioma para verificar que se ha actualizado correctamente.