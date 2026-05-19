// NaN significa "Not a Number" (No es un número) y es un valor especial en JavaScript que representa un valor que no es un número válido. Esto puede ocurrir, por ejemplo, cuando intentas convertir una cadena que no representa un número a un tipo numérico.

let miNumero = '10';

console.log(miNumero + 5); // Concatenación, resultado: '105'

let miNumeroConvertido = Number(miNumero); // Convertir a número

console.log(miNumeroConvertido + 5); // Suma, resultado: 15

// También se puede usar el operador unario + para convertir a número
let miNumeroConvertido2 = +miNumero;

console.log(miNumeroConvertido2 + 5); // Suma, resultado: 15

// Si la cadena no es un número válido, la conversión resultará en NaN
let miCadenaInvalida = 'abc';
let conversionInvalida = Number(miCadenaInvalida);

console.log(conversionInvalida); // Resultado: NaN
console.log(conversionInvalida + 5); // Resultado: NaN, cualquier operación con NaN resulta en NaN

// Para evitar esto, se puede verificar si la conversión fue exitosa usando isNaN
if (isNaN(conversionInvalida)) {
    console.log('La conversión no fue exitosa, el valor no es un número válido.');
} else {
    console.log(conversionInvalida + 5);
}