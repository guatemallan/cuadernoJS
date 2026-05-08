// CICLO WHILE

// el codigo dentro del bloque se ejecuta mientras la condición sea verdadera

let contador = 0;

while (contador < 5) {
    console.log('Contador en ' + contador);
    contador++;
}

console.log('Fin del ciclo While');

// CICLO DO WHILE

// el codigo dentro del bloque se ejecuta al menos una vez, aunque la condición sea falsa

contador = 0;

do {
    console.log('Contador en ' + contador);
    contador++;
} while (contador < 0);

console.log('Fin del ciclo Do While');

