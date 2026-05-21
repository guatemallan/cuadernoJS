// "var" fue derogado
// se recomienda usar "let" en su lugar para variables
// y "const"

// se asigna el valor literal
// esto es codigo valido, pero no es una buena practica
literal = "Juan";
console.log(literal);

// la buena practica seria usar "let"
let nombre;
nombre = "Juan";
console.log(nombre);

// Las constantes conservan su valor y no se puede modificar
const apellido = "Lopez";
apellido = "Perez";
// error "Assignment to a constant variable"