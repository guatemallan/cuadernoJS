# JavaScript

## Internacionalización

[`return valor.toLocaleString('es-GT', {style:'currency', currency:'GTQ', minimumFractionDigitis:2});`](99.ejercicios/07.presupuesto/js/app.js)
`return valor.toLocaleString('es-GT', {style:'percent', minimumFractionDigitis:2});`

## Manejo de arreglos

### findIndex
`findIndex()` devuelve el indice cuando el predicado pasado como parametro se cumple. 
En este ejemplo se usa una función flecha como predicado, que actúa como un ciclo for, recorriendo todos los indicies hasta encontrar el indicado. 
`let indiceEliminar = ingresos.findIndex(ingreso => ingreso.idIngreso === idIngreso);`

### push
`egresos.push(new Egreso(descripcion.value, +valor.value));`

### splice
Splice elimina indices en un arreglo. Si no se especifica el numero de elementos a eliminar, elimina todos a partir del indice proporcionado.
`egresos.splice(indiceEliminar, 1);`

## Manejo de tipo de datos

### conversión de una cadena a número
`Number(miCadena);`
`+miCadena;` Version simplificada.