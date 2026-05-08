// SELF INVOKING
// este tipo de funcion se invoca a si mísma

// este tipo de funciones no se pueden reutilizar, ya que no se nombra ni se asigna a una variable
(function(){
    console.log('Ejecutando la funcion');
})();

(function(a,b){
    console.log('Ejecutando la suma: ' + (a+b));
})(8,4);