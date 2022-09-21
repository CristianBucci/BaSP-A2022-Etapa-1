console.log('\nExercise 2: Strings');

/*a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula
(utilizar toUpperCase).
*/

console.log('\n-----Exercise 2-a-----');

var city = 'birmingham'.toUpperCase();

console.log('Capitalized word:', city);

/*b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros
5 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

console.log('\n-----Exercise 2-b-----');

var fruit = 'strawberry'
var fruitFirstFiveCharacters = fruit.substring(0, 5);

console.log('First 5 word`s characters:', fruitFirstFiveCharacters);

/*c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos
3 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

console.log('\n-----Exercise 2-c-----');

var artist = 'Jamiroquai';
var lastThreeCharacters = artist.substring(artist.length-3);

console.log('Word`s last 3 characters ', lastThreeCharacters);

/*d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra
en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase,
toLowerCase y el operador +).*/

console.log('\n-----Exercise 2-d-----');

var animal = 'chimpanzee';
var animalTransformed = animal.substring(0, 1).toUpperCase() + animal.substring(1).toLowerCase();

console.log('First letter capitalized:', animalTransformed);

/*e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición
del primer espacio en blanco y guardarla en una variable (utilizar indexOf).*/

console.log('\n-----Exercise 2-e-----');

var footballTeam = 'Bayern Munich';
var emptySpace = footballTeam.indexOf(' ');

console.log('Empty space index:', emptySpace);

/* f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas
palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y
el operador +).*/

console.log('\n-----Exercise 2-f-----');

var tool ='multifunction screwdriver';
var toolFirstWordCapitalize = tool.substring(0, 1).toUpperCase() + tool.substring(1, tool.indexOf(' ')).toLowerCase();
var toolSecondWordCapitalize = tool.substring(tool.indexOf(' ') + 1, tool.indexOf(' ') +2).toUpperCase() +
tool.substring(tool.indexOf(' ') + 2).toLowerCase();
var toolTransformed = toolFirstWordCapitalize + ` ` + toolSecondWordCapitalize;

console.log('Word`s first capital letter:', toolTransformed);