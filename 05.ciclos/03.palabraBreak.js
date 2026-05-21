// USO DE BREAK EN CICLOS

// El break se utiliza para salir de un ciclo antes de que termine su ejecución normal.

// Ejemplo 1: Usando break en un ciclo for
for (let i = 0; i <= 10000; i++) {
    if (i %2 == 0) {
        console.log('Par: ' + i); // Imprime los números pares del 0 al 10
        
        if (i === 4) break; // Salir del ciclo cuando i es igual a 4, lo que significa que solo se imprimirán los números pares hasta el 4 (0, 2 y 4)
    }
    console.log(i); // Imprime todos los números del 0 al 10, pero el ciclo se detendrá después de imprimir el número 4 debido al break
}

console.log("Ciclo for terminado."); // Esto se ejecutará después de salir del ciclo

//////////////  

// Ejemplo 2: Usando break en un ciclo while
let j = 0;
while (j < 10) {
    if (j === 3) {
        break; // Salir del ciclo cuando j es igual a 3
    }
    console.log(j); // Imprime los números del 0 al 2
    j++;
}

console.log("Ciclo while terminado."); // Esto se ejecutará después de salir del ciclo

//////////////  

// Ejemplo 3: Usando break en un ciclo do-while
let k = 0;
do {
    if (k === 2) {
        break; // Salir del ciclo cuando k es igual a 2
    }
    console.log(k); // Imprime los números del 0 al 1
    k++;
} while (k < 10);       

console.log("Ciclo do-while terminado."); // Esto se ejecutará después de salir del ciclo

//////////////  

// Ejemplo 4: Usando break en un ciclo anidado
// En este último ejemplo, el break solo afecta al ciclo interno, por lo que el ciclo externo continuará ejecutándose normalmente.      

for (let m = 0; m < 3; m++) {
    for (let n = 0; n < 3; n++) {
        if (n === 1) {
            break; // Salir del ciclo interno cuando n es igual a 1
        }
        console.log(`m: ${m}, n: ${n}`); // Imprime los valores de m y n
    }
}

console.log("Ciclo anidado terminado."); // Esto se ejecutará después de salir del ciclo anidado    

