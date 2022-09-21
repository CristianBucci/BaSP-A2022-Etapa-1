console.log('\nExercise 1: Variables y Operadores');

/*a.Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números
en una 3er variable.*/

console.log('\n-----Exercise 1-a-----');

var num1 = 10;
var num2 = 15;
var result = num1 + num2;

console.log ('num1 + num2:', result);

//b.Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.

console.log('\n-----Excercise 1-b-----');

var firstName = 'Cristian';
var lastName = 'Bucci';
var completeName = firstName + ' ' + lastName;

console.log('Concatenated strings:', completeName);

/*c.Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string)
guardando el resultado de la suma en una 3er variable (utilizar length).*/

console.log('\n-----Exercise 1-c-----');

var country = 'Argentina';
var capital = 'Buenos Aires';
var totalStrings = (country + capital).length;

console.log('Sum of characters:', totalStrings);