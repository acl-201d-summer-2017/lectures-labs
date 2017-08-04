madLibs();

function madLibs () {
    alert( 'Mad Libs time!' );

    var name = askFor( 'name' );
    // var name = prompt( 'Give me a name' );

    var verb = askFor( 'verb' );
    var noun = askFor( 'noun' );
    var adjective = askFor( 'adjective' );

    alert( 'Here\'s a story all about how ' + name + '\'s life got ' + verb + ', turned upside down.' );
    alert( 'They witnessed a quick red ' +  noun + ' jump over a lazy ' + adjective + ' dog!');
}

var questions = ['hello?', 'it\'s me?'];

function askFor ( word ) {
    var answer = prompt( 'Give me a ' + word );
    console.log( word + ': ' + answer );
    return answer;
}

for ( var i = 0; i < 3; i++ ) {
    console.log( 'loop #: ' + i );
    askFor( questions[i] );
}