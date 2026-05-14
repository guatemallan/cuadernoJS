# JavaScript
Notas sobre entrenamiento JavaScript y repaso de conceptos básicos de programación.

El trabajo en este cuaderno inició en otro repositorio. Se separó por simplificación y órden.

## RUTA:

Este cuaderno se complementa con otros repositorios para completar la ruta de entrenamiento:

{ [HTML](https://github.com/guatemallan/cuadernoHtmlCss/) → [CSS](https://github.com/guatemallan/cuadernoHtmlCss/) → [JavaScript](#contenidos-javascript) → React (TBD) }

Java(TBD) ⤶ ⤷ IA(TBD)


## Contenidos JavaScript

0. Introducción
    1. [JavaScript](JS/00/Introducción.md)
    2. [JIT Compilation](JS/00/Introducción.md#jit)
    3. [First-class functions](JS/00/Introducción.md#funciones-de-primera-clase)
    4. [Herramientas a utilizar](JS/00/Introducción.md#herramientas-a-utilizar-durante-el-entrenamiento)
    5. [Referencias](JS/00/Introducción.md#referencias)
    6. [Template Strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
1. [JS Básico](JS/01/01.holaMundo.js)
2. Variables
    1. [Declaración de variables](JS/02.variables/02.declaracionVariables.js)
    2. [Mejores prácticas con variables](JS/02.variables/03.mejoresPracticasDeclaracionVariables.js)
3. Operadores
    1. [Introducción a operadores](JS/03.operadores/01.operadores.js)
    2. [Tabla de precedencia de operadores](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Operator_precedence)
    3. [Precedencia de operadores](JS/03.operadores/02.precedenciaOperadores.js)
    4. [Operadores de Asignación](JS/03.operadores/03.operadoresAsignacion.js)
    5. [Operadores de Comparación](JS/03.operadores/04.operadoresComparacion.js)
    6. [Operadores Relacionales](JS/03.operadores/05.operadoresRelacionales.js)
    7. [Operadores Lógicos](JS/03.operadores/06.operadoresLogicos.js)
    8. [Operador Ternario](JS/03.operadores/07.operadorTernario.js)
    9. [Función isNaN](JS/03.operadores/08.isNaN.js)
    10. [Ejemplos de Precedencia](JS/03.operadores/09.ejerciciosPrecedencia.js)
4. Sentencias de control
    1. [If - Else](JS/04.sentenciasDeControl/01.ifElse.js)
    2. [Switch](JS/04.sentenciasDeControl/02.switch.js)
5. Ciclos
    1. [While](JS/05.ciclos/01.while.js)
    2. [For](JS/05.ciclos/02.for.js)
    3. [Break](JS/05.ciclos/03.palabraBreak.js)
    4. [Continue](JS/05.ciclos/04.palabraContinue.js)
    5. [Label](JS/05.ciclos/06.labels.js)
6. Arreglos
    1. [Declaración y manejo de arreglos](/JS/06.arreglos/01.declaracionYManejoArreglos.js)
    2. [Precauciones con arreglos](/JS/06.arreglos/02.precaucionesArreglos.js)
7. Funciones
    1. [Funciones y hoisting](JS/07.funciones/01.funcionesYHoisting.js)
    2. [Return](JS/07.funciones/02.return.js)
    3. [Funciones tipo expresión](JS/07.funciones/03.funcionesTipoExpresion.js)
    4. [Funciones *Self Invoking*](JS/07.funciones/04.funcionesSelfInvoking.js)
    5. [Funciones como objeto](JS/07.funciones/05.funcionesComoObjeto.js)
    6. [Funciones *arrow*](JS/07.funciones/06.funcionesArrow.js)
    7. [Argumentos y parámetros](JS/07.funciones/07.argumentosYParametros.js)
    8. [Paso por valor (*by value*)](JS/07.funciones/08.pasoPorValor.js)
    9. [Paso por referencia (*by reference*)](JS/07.funciones/09.pasoPorReferencia.js)
8. Objetos
    1. [Definición de objetos y propiedades](JS/08.objetos/01.objetosYPropiedades.js)
    2. [Creación de objetos](JS/08.objetos/02.creacionDeObjetos.js)
    3. [Acceso a propiedades](JS/08.objetos/03.accesoAPropiedades.js)
    4. [Adición y eliminación de propiedades](JS/08.objetos/04.agregarQuitarPropiedades.js)
    5. [Formas de imprimir un objeto](JS/08.objetos/05.imprimirObjeto.js)
    6. [Métodos *getter* y *setter*](JS/08.objetos/06.metodosGetSet.js)
    7. [Constructor y Prototipos](JS/08.objetos/07.constructoresYPrototipos.js)
    8. [Métodos *Call* y *Apply*](JS/08.objetos/08.metodosCallYApply.js)
9. Clases
    1. [Definición de clases](/JS/09.clases/01.definicionDeClases.js)
    2. [Métodos *getter* y *setter*](/JS/09.clases/02.getterYSetter.js)
    3. [Clases e imposibilidad de *hoisting*](/JS/09.clases/03.hoistingYClases.js)
    4. [Herencia y sobreescritura](/JS/09.clases/04.herenciaYSobreescritura.js)
    5. [Clase *Object* y polimorfismo](/JS/09.clases/05.claseObjectPolimorfismo.js)
    6. [Elementos estáticos](/JS/09.clases/06.static.js)
    7. [Emulación de constante estática](/JS/09.clases/07.constanteEstatica.js)
10. [Strict, el modo estricto](JS/10.strict/01.strict.js)
11. [Programación orientada a objetos (POO, OOP)](/JS/11.POO/01.sobreescrituraYPolimorfismo.js)
12. Manejo de errores
    1. [Bloque *Try-Catch-Finally*](/JS/12.manejoErrores/01.tryCatch.js)
    2. [Throw](/JS/12.manejoErrores/02.throw.js)
13. Funciones tipo flecha

99. Ejercicios y ejemplos
    1. [Ejercicio de herencia, polimorfismo, sobreescritura y elementos estáticos](/JS/99.Ejercicios/01.herencia.js)

        ![UML Ejercicio](/JS/99.Ejercicios/01.herencia.jpg "UML ejercicio herencia")

    2. [Sistema de ventas básico](/JS/99.Ejercicios/02.sistemaVentas.js)

        ![UML Ejercicio](/JS/99.Ejercicios/02.sistemaVentas.png "UML ejercicio ventas")
    3. [Mundo PC](/JS/99.Ejercicios/03.proyectoMundoPC.js)
        
        ![UML Ejercicio](/JS/99.Ejercicios/03.proyectoMundoPc.UML.png)
        ![Ejemplo Output](/JS/99.Ejercicios/03.proyectoMundoPc.Output.png)



[Volver al inicio](#)