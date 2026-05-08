let x = 5, y = 10, z = ++x + y--;

// el preincremento se realizó antes de la suma
console.log(x); // 6
// el postdecremento se realizó después de la suma
console.log(y); // 9
console.log(z); // 16

//////////////////////////////////////////

let resultado = 4 + 5 * 6 / 3;

//14
console.log(resultado);

//////////////////////////////////////////

resultado = (4 + 5) * 6 / 3;

//18
console.log(resultado); 