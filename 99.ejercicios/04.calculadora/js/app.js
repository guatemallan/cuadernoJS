console.log('Aplicación calculadora iniciada....');

function sumar(){
    const forma = document.getElementById('forma');

    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];

    // estos son valores tipo string, y por lo tanto esta operación solo concatenará
    // let resultado = operandoA.value + operandoB.value;

    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);

    // verificación, operandos faltantes o caracteres no validos
    if (isNaN(resultado))
        resultado = 'La operación no incluye números.';

    document.getElementById('resultado').innerHTML = `Resultado = ${resultado}`;
}