'use strict';

// // arr in a variable
// var arr = [1,2,3];
// console.log( arr[0] );



// // arr in obj
// var obj = {
//     arr: [4,5,6]
// };
// console.log( obj.arr[0] );



// // arr in obj created with constructor
// function Obj ( arr ) {
//     this.arr = arr;
// }

// Obj.prototype.printArray = function () {
//     console.log( this.arr[0] );
// }

// var obj2 = new Obj( [7,8,9] );
// console.log( obj2.arr[0] );





function Quiz ( name, questions, correctAnswers ) {
    this.name = name;
    this.questions = questions;
    this.correctAnswers = correctAnswers;
    this.userAnswers = [];
    this.score = 0;
}

Quiz.prototype.start = function () {
    for ( var i = 0; i < this.questions.length; i ++ ) {
        var userAnswer = prompt( this.questions[i] );
        this.userAnswers.push( userAnswer );

        if ( userAnswer === this.correctAnswers[i] ) { // correct
            this.score++;
        } else { // wrong
            this.score = this.score - 1;
        }
    }
}

Quiz.prototype.render = function () {
    var quizSection = document.getElementById( this.name );

    var title = document.createElement( 'h1' );
    title.innerHTML = '<em>' + this.name + '</em>';
    title.setAttribute( 'title', this.name );
    quizSection.appendChild( title );

    for ( var i = 0; i < this.questions.length; i ++ ) {
        var questionHeader = document.createElement( 'h2' );
        questionHeader.innerText = this.questions[i];

        var userAns = document.createElement( 'p' );
        userAns.innerText = this.userAnswers[i];

        var sticker = document.createElement( 'span' );

        if ( this.userAnswers[i] === this.correctAnswers[i] ) {
            userAns.style.color = 'green';
            // userAns.classList.add( 'correct' ); // .correct { color: green; }
            sticker.innerText = '(CHECKMARK)';
        } else {
            userAns.style.color = 'red';
            sticker.innerText = ' ): ';
        }

        userAns.appendChild( sticker );
        quizSection.appendChild( questionHeader );
        quizSection.appendChild( userAns );
    }
}

var jsQuiz = new Quiz( 'jsQuiz',
                ['What does DOM stand for?', 
                'What array property tells us how many items it has?', 
                'What color is JS?'],
                ['Document Object Model', 'length', 'yellow'] );
jsQuiz.start();
jsQuiz.render();


// TODO using a for loop prompt each question to the user
// TODO add a new array property "userAnswers" to our quiz object

// TODO add the questions as <h1>'s to the DOM
// TODO add the answers as <h2>'s to the DOM
// TODO check if the user gets the answer correctly
// TODO add a check or X depending on the user's answer