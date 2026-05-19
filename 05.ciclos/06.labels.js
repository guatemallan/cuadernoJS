// USO DE ETIQUETAS
// Las etiquetas en JavaScript se utilizan para identificar bloques de código específicos, como bucles o declaraciones condicionales. Esto permite controlar el flujo de ejecución de manera más precisa, especialmente cuando se utilizan con las declaraciones break y continue.
// El uso de etiquetas no es recomendado en la mayoría de los casos, ya que puede hacer que el código sea más difícil de leer y mantener. Sin embargo, pueden ser útiles en situaciones específicas donde se necesita salir de múltiples niveles de bucles o condicionales.

inicio:
for (let contador = 0; contador < 10; contador++) {
    if (contador % 2 !== 0) {
        continue inicio; // Esto hará que el bucle continúe desde la etiqueta "inicio"
    }
    console.log(contador); // Solo se imprimirán los números pares
}

