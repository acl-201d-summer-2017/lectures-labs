'use strict';

function Question ( question, answer, required ) {
    this.question = question;
    this.answer = answer;
    this.required = required;

    this.render();
}

Question.prototype.render = function () {
    var questionsList = document.getElementById( 'questions' );
    var questionLi = document.createElement( 'li' );
    questionLi.innerText = this.question;
    if ( this.required ) {
        questionLi.innerText += '*';
    }
    questionsList.appendChild( questionLi );
}

var question = new Question( 'What color is JavaScript?', 'yellow', true );
var question0 = new Question( 'What color is HTML?', 'red', true );
var question1 = new Question( 'What color is CSS?', 'blue' );

var form = document.getElementById( 'new-question' );
form.addEventListener( 'submit', function () {
    // prevent form submit from redirecting page
    event.preventDefault();

    // accessing the form's inputs' values
    console.log( this.question.value );
    console.log( this.answer.value );
    console.log( this.required.value );
    
    var newQuestion = new Question( this.question.value, this.answer.value, this.required.value === 'required' );
});



// TODO add event listeners and handlers to menu
var menu = document.getElementById( 'menu' );

/* how to add event listener */
menu.addEventListener( 'click', menuHandler );

function menuHandler () {
    console.log( 'thie entire event obj:', event );
    console.log( 'what is this???', this );
    console.log( event.target );
    // alert( 'I am a menu!' );
}

/* how not to listen to events */
// menu.onclick = function () {
//     alert( 'I was clicked again!' );
// };

// menu.onclick = function () {
//     console.log( 'click clack' );
//     console.log( this );
// };
