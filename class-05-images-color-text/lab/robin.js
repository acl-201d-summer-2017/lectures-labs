'use strict';

///////////////////////////////////// 
/* Problem 1 (this is your demo that we'll solve in class)

Write a function called sum() that takes in two numbers as
arguments and then returns an array where the first element 
is the sum of those numbers, and the second element is a concatenated
string that EXACTLY follows this example and uses 
the values that were input into the function:

"The sum of 4 and 7 is 11."


Test this function by hand in the console to get it working,
and when you think it is finished, uncomment the call
for the testSum() function below and check the console 
to see if the test passes.

Once you get the test passing, do an a-c-p cycle and synchronize the 
code between GitHub and your laptop. Don't forget to create 
a new branch for your work on the next question!

*/

// Write your code here
function sum(a,b){ //eslint-disable-line
    var total = a+b;
    return [total, 'The sum of ' + a + ' and ' + b + ' is ' + total + '.'];
}

// Here is the test for sum(); uncomment it to run it
testSum(4, 7);

// Write your code here
function multiply(a,b){ //eslint-disable-line
    var total = a * b;
    return [total, 'The product of ' + a + ' and ' + b + ' is ' + total +'.'];
}

// Here is the test for multiply(); uncomment it to run it
testMultiply(5,9);


// Write your code here
function sumAndMultiply(a, b, c) { //eslint-disable-line
    var summ = sum( sum(a, b)[0], c )[0];
    var product = multiply( multiply(a, b)[0], c )[0];
    return [summ, product, a + ' and ' + b + ' and ' + c + ' sum to ' + summ + '.',
            'The product of ' + a + ' and ' + b + ' and ' + c + ' is ' + product + '.'];
    //arr [ sum , product , "4 and 7 and 5 sum to 16.", "The product of 4 and 7 and 5 is 140."]
}
// Here is the test for sumAndMultiply(); uncomment it to run it
testSumAndMultiply(4,7,5);



// Write your code here
var testArray = [2,3,4]; //eslint-disable-line
function sumArray(numbers){ //eslint-disable-line
    var arraySum = 0;
    for (var i = 0; i < numbers.length; i++){
        arraySum = sum( arraySum, numbers[i] )[0];
    }
    return [arraySum, numbers + ' was passed in as an array of numbers, and ' + arraySum + ' is their sum.'];
}

// Here is the test for sumArray(); uncomment it to run it
// testSumArray(testArray);



// Write your code here
function multiplyArray(testArray){ //eslint-disable-line
    var product = 1;
    for (var i = 0; i < testArray.length; i++){
        product = multiply( product, testArray[i] )[0];
    }
    return [product, 'The numbers ' + testArray + ' have a product of ' + arrayProduct + '.'];
}

// Here is the test for multiplyArray(); uncomment it to run it
testMultiplyArray([2,3,4]);