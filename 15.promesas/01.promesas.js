/**
 * PROMESAS
 * 
 * Se utiliza la arquitectura de una función flecha para su declaración
 * además se utilizan funciones de tipo Callback como parámetros, para 
 * evaluar el éxito o fracaso de la promesa
 * 
 * Ver diagrama 01.promesas.png en el readme.md
 */

/**
 * DECLARACIÓN DE PROMESA
 */
let miPromesa = new Promise((resolver, rechazar) => {
    // let expresion = true;
    let expresion = false;

     if(expresion)
        resolver('Resolvió correctamente!');
     else
        rechazar('Se encontó un problema y no se resolvió...');
});
// verificar el cierre de paréntesis y llaves antes de "dar enter"

// Utilización de la promesa, solo con .then
miPromesa.then(
    // se envían dos funciones flecha como parámetros
    valor => console.log(valor),
    error => console.log(error)
    // para hacer el código más legible, se coloca en dos lineas
    // pero puede colocarse en una sola si se desea
);

// en una linea, puede ser confuso
miPromesa.then(valor => console.log(valor), error => console.log(error));

// Utilización de la promesa con then y catch
miPromesa.then(
    valor => console.log(valor)
).catch(
    error => console.log(error)
);

// otra manera de escribirla
miPromesa
.then(valor => console.log(valor))
.catch(error => console.log(error));

// en una linea, puede ser confuso si es muy extenso
miPromesa.then(valor => console.log(valor)).catch(error => console.log(error));
