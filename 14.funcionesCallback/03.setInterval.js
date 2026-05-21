/**
 * SET INTERVAL
 * Se ejecuta la función callback cada cierto tiempo
 */

let reloj = () => {
    let fecha = new Date(); // fecha actual
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`)
} 

setInterval(reloj, 1000); // se ejecuta cada 1 segundo