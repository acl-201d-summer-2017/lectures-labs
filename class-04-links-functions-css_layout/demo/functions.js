'use strict';

/* parts of a function */
function myFunction ( parameter, param2, param3 ) {
    console.log( 'I am inside of a function!' );

    console.log( parameter, param2, param3 );

    if ( parameter ) {
        alert( 'this function was given the arguments: ' + parameter );
    } else {
        alert( 'You didn\'t give me anything ):' );
    }

    return 'myFunction is done with this : ' + parameter;
}

// var name = prompt( 'what is your name?' ); 

// myFunction();
// myFunction( 5 );
// myFunction( "different", "things" );





// no name function
var anonymousFunction = function ( text ) {
    console.log( 'anon function says' + text );
    return 'anon function says' + text;
};

// empty();
// anonymousFunction( "text" );
// lazy();
// returnNothing();

// no params
function empty () {
    console.log( 'I take nothing' );
    return 'empty function is done';
}

// no statements
function lazy ( importantParameter ) {}

// no return 
function returnNothing ( todo1, todo2 ) {
    console.log( 'I have two parameters' + todo1, todo2 );
    console.log( 'but will not give anything back' );
}


/* function declaration vs expression */

// declaredFun(); // can be called anywhere
// funExpression();

function declaredFun () {
    alert( 'I was declared and can be called anywhere in the file!' );
}

console.log( desk );
var desk = "cool";

var funExpression = function () {
    alert( 'I was a function expression and can only be called after I\'m created!' );
}

/* scope */

function alphabet () {
    var letters = ['a','b','c'];
    console.log( 'inside of the alphabet function: ' + letters );
}

alphabet();
console.log( 'outside of the alphabet function: ' + letters );