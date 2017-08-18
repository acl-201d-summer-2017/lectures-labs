'use strict';

// how we were programming last week

function addAnimalToDom ( animalName, species ) {
    var list = document.getElementById( species );
    var animalItem = document.createElement( 'li' );
    animalItem.innerHTML = animalName;
    list.appendChild( animalItem );
}

function askForFood ( animalName, food ) {
    alert( animalName + ' wants some ' + food );
}

function renameAnimal ( animalName, newName ) {
    // find the right animal
    // update their name
}

addAnimalToDom( 'Zeus', 'zebra' );
addAnimalToDom( 'Fred', 'lion' );
addAnimalToDom( 'Lisa', 'penguin' );
addAnimalToDom( 'Moose', 'penguin' );
addAnimalToDom( 'Susan', 'zebra' );

askForFood( 'Zeus', 'grass' );