// operators = && + 

var hello = 'assignment';

console.log( '===', hello === 'assign' ); //false
console.log( '!==', hello !== 'assign' ); //true
console.log( '<', hello.length < 5 ); //false
console.log( '<=', hello.length <= 12 ); //true

// hello = 5;
// // === vs ==
console.log( '=== 5', hello === 5 ); // true
console.log( '== 5', hello == 5 ); // true

hello = '5';
console.log( '=== 5', hello === 5 ); // false 
console.log( '== 5', hello == 5 ); // true

var studentsArr = ['Haley','Meryl','Joe'];
if ( studentsArr.length === 3 && studentsArr[1] === 'Steph' ) {
    alert( 'hi joe!' );
}

if ( studentsArr.length === 3 && studentsArr[2] === 'Joe' ) {
    alert( 'hi joe!' );
}

if ( studentsArr.length === 2 || studentsArr[studentsArr.length - 1] === 'Joe' ) {
    alert( 'hi joe!' );
}

/* switching and looping fruits example */
// var favColor = prompt( 'what is your favorite color?' );
// TODO depending on the color, reply with a fruit of that color




/* polling commits by students example */
// TODO prompt students asking how many commits they made yesterday
var commits = [];

/* use a for loop */
for ( var i = 0; i < students.length; i ++ ) {
    var commit = prompt( 'how many commits did you make yesterday?' );
    commits.push( commit );
}

console.log( 'array of commits:' + commits );

/* use a do while loop */
var totalCommits = 0;

do {
    console.log( ' ------------------------------- inside do while loop' );
    var commit = parseInt( prompt( 'how many commits did you make yesterday?' ) );
    commits.push( commit );
    totalCommits = totalCommits + commit;
    
    console.log( 'total commits: ' + totalCommits );
} while ( totalCommits < 100 )




/* use a while loop */
while ( totalCommits < 1000 ) {
    console.log( ' ------------------------------- inside while loop' );
    var commit = parseInt( prompt( 'how many commits did you make yesterday?' ) );
    commits.push( commit );
    totalCommits = totalCommits + commit;
    
    console.log( 'total commits: ' + totalCommits );
}

var passwords = ['while', 'unordered','attribute'];

do {
    var guess = prompt( 'what is the password?' ).toLowerCase();
    console.log( guess, passwords );
} while ( passwords.indexOf( guess ) === -1 );