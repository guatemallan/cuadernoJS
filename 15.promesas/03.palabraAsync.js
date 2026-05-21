/**
 * ASYNC
 * 
 * Se utiliza para simplificar el uso de promesas
 * La palabra async indica que una funcion va a ejecutar una promesa
 */

let promesa = new Promise((resolver) =>{
    // 
    setTimeout(() => resolver('Este código resolver no se ejecuta'),3000);
});

async function miFuncionConPromesa(){
    return 'saludos con promesa y async, esta funcion cumple la funcion del resolver';
}

miFuncionConPromesa().then(valor => console.log(valor));