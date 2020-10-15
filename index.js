// 1.- Crear variable de nombre arrayVacio cuyo valor sea un array vacío

var arrayVacio = [ ]

console.log(arrayVacio)

// 2.- Crear variable de nombre arrayNumeros declarada con un array de números del 0 al 9 (0, 1, 2...)

var arrayNumeros = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

console.log(arrayNumeros)

// 3.- Crear variable de nombre arrayNumerosPares declarada con un array con los números pares del 0 al 9 (considerando al 0 par)

var arrayNumerosPares = [ 0, 2, 4, 6, 8 ]

console.log(arrayNumerosPares)

// 4.- Crear variable de nombre arrayBidimensional declarada con valor array [[0, 1, 2], ['a', 'b', 'c']]

var arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']]

console.log(arrayBidimensional)

// Funciones

// 5.- Crea la función suma que acepte como argumento dos números y devuelva el resultado de su suma

function suma(a, b) {
    var suma = 2 + 8
  return suma
 }
 
 console.log(suma())

 // 6.- Crea la función potenciacion que acepte como argumento dos números y devuelva el resultado de elevar el primero(a) al segundo(b) (a^b)

 function suma(a, b) {
    var suma = 2 ^ 8
  return suma
 }
 
 console.log(suma())

 //  7.- Crea la función separarPalabras que acepte como argumento un string y devuelva un array de palabras 'hola mundo' => [hola, mundo]

 
 function separarPalabras(hola,mundo) {
  var separarPalabras = ['hola', 'mundo']
return separarPalabras
   }

console.log(separarPalabras())

// 8.- Crea la función repetirString que acepte como argumento un string y un número y devuelva un string que sea el resultado de concatenar el primer string el número dado de veces

function repeat_string(string, num) 
  {
    if ((string == null) || (num < 0) || (num === Infinity) || (num == null))
      {
        return('Error in string or count.');
      }
        num = num | 0; // Floor count.
    return new Array(num + 1).join(string);
  }
console.log(repeat_string('a', 4));
console.log(repeat_string('a'));
console.log(repeat_string('a', -2)); 
console.log(repeat_string('a', Infinity));


 // 9.- Crea la función esPrimo que acepte como argumento un número y devuelva true si es primo y false si no lo es

 
// Mezclando arrays y funciones
 // 10.- Crear la función ordenarArray que acepta como argumento un array de números y devuelva un array ordenado de menor a mayor

 // 11.- Crear la función obtenerPares que acepta como argumento un array de números y devuelva un array con los elementos pares

 // 12.- Crear la función pintarArray que acepte como argumento un array y devuelva una cadena de texto Array entrada: [0, 1, 2] String salida: '[0, 1, 2]'

 // 13.- Crear la función arrayMapi que acepte como argumento un Array y una función y devuelva un array en el que se haya aplicado la función a cada elemento del array

 // 14.- Crear la función eliminarDuplicados que acepte como argumento un array y devuelva un array en el que se hayan eliminado los duplicados