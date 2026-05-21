// sentencia de control if-else

let condicion = false;

// a pesar de que el uso de llaves es opcional cuando solo hay una linea de codigo,
// es recomendable usarlas siempre para evitar errores futuros al agregar mas lineas de codigo.
if (1>2) {
    console.log("La condición es verdadera");
} else {
    console.log("La condición es falsa");
}

///////////
numero = 2;

if(numero == 1){
    console.log("El numero es 1");
} else if(numero == 2){
    console.log("El numero es 2");
} else if(numero == 3){
    console.log("El numero es 3");
} else {
    console.log("El numer es desconocido");
}

////////////////
// estaciones del año

let mes = 4;
let estacion;

if(mes == 1 || mes == 2 || mes == 12){
    estacion = "Invierno";
} else if(mes == 3 || mes == 4 || mes == 5){
    estacion = "Primavera";
} else if(mes == 6 || mes == 7 || mes == 8){
    estacion = "Verano";
} else if(mes == 9 || mes == 10 || mes == 11){
    estacion = "Otoño";
} else {
    estacion = "Mes desconocido";
}

console.log(estacion);