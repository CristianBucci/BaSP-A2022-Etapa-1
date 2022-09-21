console.log('\nExercise 3: Arrays');

/*a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
"Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).
*/

console.log('\n-----Exercise 3-a-----');

var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre',
'Noviembre', 'Diciembre'];

console.log('Months 5 and 11:', months[4],', ' ,months[10]);

//b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).

console.log('\n-----Exercise 3-b-----');

var sortedMonths = months.sort();

console.log(sortedMonths);

//c. Agregar un elemento al principio y al final del array (utilizar unshift y push).

console.log('\n-----Exercise 3-c-----');

months.unshift('New Year');

console.log('Add new element at the ---BEGINNING--- of the array:', months);

months.push('Christmas');

console.log('Add new element at the ---END--- of a array:', months);

//d. Quitar un elemento del principio y del final del array (utilizar shift y pop).

console.log('\n-----Exercise 3-d-----');

months.shift();

console.log('Remove element to the ---BEGINNING--- of the array:', months);

months.pop();

console.log('Remove element to the ---END--- of the array:', months);

//e. Invertir el orden del array (utilizar reverse).

console.log('\n-----Exercise 3-e-----');

months.reverse();

console.log('Reverse the array:', months);

/*f. Unir todos los elementos del array en un único string donde cada mes este separado por un guión
- (utilizar join).*/

console.log('\n-----Exercise 3-f-----');

months = months.join('-');

console.log('Join the elements of the array:', months);

//g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).

console.log('\n-----Exercise 3-g-----');

var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre',
'Noviembre', 'Diciembre'];

months = months.slice(4);

console.log('Months from May to November', months);