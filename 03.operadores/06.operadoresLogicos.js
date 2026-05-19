// OPERADORES LÓGICOS

let a = 95;
let valorMinimo = 0, valorMaximo = 10;

// AND: &&
if (a >= valorMinimo && a <= valorMaximo) {
    console.log('El valor esta dentro del rango');
} else {
    console.log('El valor esta fuera del rango');
}

// OR: ||
if (a < valorMinimo || a > valorMaximo) {   
    console.log('El valor esta fuera del rango');
} else {
    console.log('El valor esta dentro del rango');
}

/////
let vacaciones = true, diaDescanso = false;

if (vacaciones || diaDescanso) {
    console.log('Padre puede asistir al juego de su hijo');
} else {
    console.log('Padre no puede asistir al juego de su hijo, está ocupado.');
}