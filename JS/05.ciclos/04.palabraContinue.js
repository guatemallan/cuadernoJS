// USO DE PALABRA CONTINUE EN CICLOS

// La palabra continue se utiliza para saltar a la siguiente iteración de un ciclo, omitiendo el código que sigue después de ella en la iteración actual.

// Ejemplo 1: Usando continue en un ciclo for
for (let contador = 0; contador <= 10; contador++) {
    // comparacion estricta
    if (contador % 2 !== 0) {
        continue; // Saltar a la siguiente iteración si el número no es par
    }
    console.log('Número par: ' + contador); // Imprime solo los números pares del 0 al 10
}

console.log("Ciclo for terminado."); 

// Ejemplo 2: Usando continue en un ciclo while
let numero = 0;
while (numero <= 10) {
    if (numero % 2 !== 0) {
        numero++; // Incrementar el número antes de continuar para evitar un bucle infinito
        continue; // Saltar a la siguiente iteración si el número no es par
    }
    console.log('Número par: ' + numero); // Imprime solo los números pares del 0 al 10
    numero++;
}

console.log("Ciclo while terminado."); 