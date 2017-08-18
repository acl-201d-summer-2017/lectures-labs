'use strict';

/* 
    zoo animal model

    properties?
    name
    species
    food

    methods?
    addToZoo()
    askForFood()
    tellJokes()

    zooKeeper
    addToZoo()
*/
var food = 'cake';

var zebra1 = {
    name: 'Zeus',
    species: 'zebra',
    food: 'grass',
    askForFood: function () {
        alert( 'Give me some ' + this.food ); // this.food 'grass'
    },
    addToDom: function () {
        var zebraList = document.getElementById( 'zebra' );
        var newZebra = document.createElement( 'li' );
        newZebra.innerHTML = this.name;
        zebraList.appendChild( newZebra );
    }
};

console.log( 'zebra1 has the keys: ' + Object.keys( zebra1 ) );

var lion1 = {
    name: 'Fred',
    species: 'lion',
    food: 'deer',
    askForFood: function () {
        alert( 'Give me some ' + this.food );
    }
};

var penguin1 = {
    name: 'Lisa',
    species: 'penguin',
    food: 'deer',
    askForFood: function () {
        alert( 'Give me some ' + this.food );
    }
};

var redPanda1 = {
    name: 'Scarlet',
    species: 'red-panda',
    food: 'bamboo',
    askForFood: function () {
        alert( 'Give me some ' + this.food );
    }
};


