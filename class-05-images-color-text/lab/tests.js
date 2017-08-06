'use strict';

function setElementsPass(id, cb) {
  var p = document.getElementById(id);
  p.setAttribute('style', 'white-space: pre;');
  p.textContent = 'TEST FOR sum() PASSES';
  p.style.color = 'green';
}

function setElementsFail(id, cb, expected) {
  var p = document.getElementById(id);
  p.setAttribute('style', 'white-space: pre;');
  p.textContent += 'TEST FOR sum() FAILS\r\n';
  p.textContent += expected + '\r\n';
  p.innerHTML += 'Got: ' + cb;
  p.style.color = 'red';

}

function testSum() {
  if (sum(4,7)[1] === 'The sum of 4 and 7 is 11.') {
    setElementsPass('sum');
  } else {
    setElementsFail('sum', sum(4,7), 'Expected: 11, The sum of 4 and 7 is 11.');
  }
}

function testMultiply() {
  if (multiply(5,9)[1] === 'The product of 5 and 9 is 45.') {
    setElementsPass('multiply');
  } else {
    setElementsFail('multiply', multiply(5, 9), 'Expected:  45,The Product of 5 and 9 is 45.');
  }
}

function testSumAndMultiply() {
  if (sumAndMultiply(4, 7, 5)[2] === '4 and 7 and 5 sum to 16.' && sumAndMultiply(4, 7, 5)[3] === 'The product of 4 and 7 and 5 is 140.') {
    setElementsPass('sumAndMultiply');
  } else {
    setElementsFail('sumAndMultiply', sumAndMultiply(4, 7, 5), 'Expected: 16,140,4 and 7 and 5 sum to 16.,The product of 4 and 7 and 5 is 140.');
  }
}

function testSumArray() {
  if (sumArray(testArray)[1] === '2,3,4 was passed in as an array of numbers, and 9 is their sum.') {
    console.log('%c TEST FOR sumArray() PASSES', 'color: green');
  } else {
    console.log('%c TEST FOR sumArray() FAILS', 'color: red');
  }
}

function testMultiplyArray() {
  if (multiplyArray(testArray)[1] === 'The numbers 2,3,4 have a product of 24.') {
    console.log('%c TEST FOR multiplyArray() PASSES', 'color: green');
  } else {
    console.log('%c TEST FOR multiplyArray() FAILS', 'color: red');
  }
}
