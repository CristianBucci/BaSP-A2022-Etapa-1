console.log('\nExercise 6: Funciones');

/*a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el
resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.*/

console.log('\n-----Exercise 6-a-----');

function sum(num1, num2){
    return num1 + num2;
};

var result = sum(100, 50);

console.log('Function sum result:', result );

/*b. A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número;
de no ser un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como
resultado.*/

console.log('\n-----Exercise 6-b-----');

function sumValidateNumber(num1, num2){
    if(typeof num1 !== 'number'){
        alert('Error' + ' ' + num1 + ' '+ 'is not a number');
        return NaN;
    }
    if(typeof num2 !== 'number'){
        alert('Error' + ' ' + num2 + ' ' + 'is not a number');
        return NaN;
    }
    return sum(num1, num2);
};

console.log('Check that the parameters are numbers:', sumValidateNumber(5, '10'), sumValidateNumber(8, 20));

/*c. Aparte, crear una función validate Integer que reciba un número como parámetro y devuelva verdadero si es
un número entero.*/

console.log('\n-----Exercise 6-c-----');

function validateInteger(num){
    return Number.isInteger(num);
};

console.log('Check that the parameters are integers:', validateInteger(10.5), validateInteger(10));

/*d. A la función suma del ejercicio 6b) agregarle una llamada a la función del ejercicio 6c. y que valide que los
números sean enteros. En caso que haya decimales mostrar un alerta con el error y retornar el número convertido a
entero (redondeado).*/

console.log('\n-----Exercise 6-d-----');

function validateNumbersAndInteger (num1, num2){
    if(typeof num1 === 'number' && typeof num2 === 'number'){
        if(!validateInteger(num1)){
            alert('Error, this number must be integer: ' + num1 + ' ' + ', here the rounded number:' + ' ' +
            Math.round(num1));
            num1 = Math.round(num1);
        }if(!validateInteger(num2)){
            alert('Error, this number must be integer: ' + num2 + ' ' + ', here the rounded number:' + ' ' +
            Math.round(num2));
            num2 = Math.round(num2);
        }
        return sum(num1, num2);
    }else{
        alert('Error, parameters must be numbers:'+ ' ' + num1 + ' , ' + num2);
        return NaN;
    }
};

console.log('Validate that the parameters are numbers and integers in sum function:',
validateNumbersAndInteger(5, 19.5), validateNumbersAndInteger(5, '12'));

/*e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando
que todo siga funcionando igual.*/

console.log('\n-----Exercise 6-e-----');

function finalValitation(num){
    if(typeof num !== 'number'){
        alert('Error, this parameter must be number' + ' ' + num);
        return NaN;
    }else if(!validateInteger(num)){
        alert('Error, this number must be integer: ' + num + ' ' + ', here the rounded number:' + ' ' +
        Math.round(num));
        return Math.round(num);
    }
    return num;
};

function finalSum(num1, num2){
    num1 = finalValitation(num1);
    num2 = finalValitation(num2);
    return num1 + num2;
};

console.log('Final sum, validation in separate function:', finalSum(12.3, 8.2), finalSum(15.3, '20'));