/* METODO CALL
Nos permite llamar funciones de otros objetos aunque no esten definidos en el objeto que estemos utilizando en ese momento
*/

let personaUno = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

let personaDos = {
    nombre: 'Maria',
    apellido: 'Garcia'
}

// NOTE: no olvidad () despues del nombre de la función
console.log(personaUno.nombreCompleto());

// uso de funcion CALL
console.log(personaUno.nombreCompleto.call(personaDos));

// tambien podemos usar argumentos con CALL
let personaTres = {
    nombre: 'Luis',
    apellido: 'Lopez',
    nombreCompleto: function(titulo, telefono){
        return titulo + ' ' + this.nombre + ' ' + this.apellido + ', teléfono ' + telefono;
    }
}

console.log(personaTres.nombreCompleto.call(personaDos, 'Ingeniero', '444555666777'));

// si pasamos argumentos a una función que no los define, no pasa nada
console.log(personaUno.nombreCompleto.call(personaDos, 'Ingeniero', '444555666777'));

///////////////////

/* METODO APPLY
Nos permite usar fucniones o metodos de otros objetos, de manera similar que CALL, pero con algunas diferencias para manejar los parametros
*/

// let personaCuatro

// sin parametros funciona igual que call
console.log(personaUno.nombreCompleto.apply(personaDos));
console.log(personaTres.nombreCompleto.call(personaDos));
console.log(personaTres.nombreCompleto.apply(personaDos));

// parametros con call
console.log(personaTres.nombreCompleto.call(personaDos, 'Ingeniero', '444555666777'));

// parametros con apply, los argumentos se pasan con arreglo
let arreglo = ['Ingeniero','444555666777'];
console.log(personaTres.nombreCompleto.apply(personaDos, arreglo));

// si los pasamos sin arreglo, tenemos error CreateListFromArrayLike called on non-object
console.log(personaTres.nombreCompleto.apply(personaDos, 'Ingeniero', '444555666777'));
