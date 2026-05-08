// TIPOS DE DATOS EN JS ******************************
// ***************************************************

// 1. Tipos principales: *****************************

// Tipo String
var nombre = "Pedro";

console.log(nombre);

// Tipo NUmerico
var numero = 1000;
console.log(numero);

// Tipo Objeto
var objeto = {
    nombre   : "Juan",
    apellido : "Perez",
    edad : 25,
    telefono: 55443322
}
console.log(objeto);

/*
2. TIPOS DINAMICOS ****************************************
En JS las variables son dinamicas
podemos asignarle el tipo al asignar 
otro valor, de tipo diferente, ejemplo:
*/

// ahora la variable nombre tiene tipo numerico
nombre = 101.78;
console.log(nombre);
// podemos averiguar el tipo de una variable con la funcion typeoff
console.log(typeof nombre);

// funcion typeoff aplicado en objetos
console.log(typeof objeto)
console.log(typeof objeto.nombre);

// 3. TIPO BOLEANO **********************************
// tambien llamadas de tipo bandera
var bandera =true;
console.log(typeof bandera);
console.log(bandera);
bandera = false;
console.log(bandera);

// 4. TIPO FUNCTION *********************************
function miFuncion(){};
console.log(typeof miFuncion);
console.log(miFuncion);

// 5. TIPO SYMBOL ***********************************
var simbolo = Symbol("Mi simbolo");
console.log(typeof simbolo);
console.log(simbolo);

// 6. TIPO CLASE, las clases tambien son una funcion **
class persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(typeof persona);
console.log(persona);

// 7. TIPO INDEFINIDO *******************************
var indefinido;
console.log(typeof indefinido);
console.log(indefinido);

// 8. NULL
var nulo = null;
console.log(typeof nulo);
console.log(nulo);

// 9. undefined tambien se puede asignar como valor
indefinido = undefined;
console.log(typeof indefinido);
console.log(indefinido);

// 10. ARREGLOS ***********************************
// los arreglos en JS son del tipo objeto
var autos=['Toyota','Mazda','Volvo','BMW'];
console.log(typeof autos);
console.log(autos);

// 11. Valores vacios
var vacia='';
console.log(typeof vacia);
console.log(vacia);
