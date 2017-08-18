'use strict';

// let's make a constructor function for these objects
// animals as object literals

function Animal ( name, species, food ) {
    this.name = name;
    this.species = species;
    this.id = species;
    this.food = food;
    this.zoo = "Alchemy Code Zoo";

    this.addToDom();
}

Animal.prototype.askForFood = function () {
    alert( 'Give me some ' + this.food + ' -' + this.name ); 
}

Animal.prototype.addToDom = function () {
    var list = document.getElementById( this.id );
    var listItem = document.createElement( 'li' );
    listItem.innerText = this.name + ' <3\'s ' + this.zoo;
    list.appendChild( listItem );
}

var zebra0 = new Animal( 'Sophie', 'zebra', 'grass' );
var zebra1000 = new Animal( 'Masie', 'zebra', ['hay', 'grass'] );
var lion0 = new Animal( 'Leo', 'lion', 'grass' );
var penguin0 = new Animal( 'Penny', 'penguin', 'fish' );
var redPanda0 = new Animal( 'Lisa', 'red-panda', 'bamboo' );
var lion1 = new Animal( 'Lisa', 'lion', 'bamboo' );

// var animals = [ zebra0, zebra1000, lion0, penguin0, redPanda0, lion1 ];
// for ( var i = 0; i < animals.length; i ++ ) {
//     animals[i].addToDom();
// }

// zebra0.addToDom();
// zebra1000.addToDom();
// lion0.addToDom();

// var zebra1 = {
//     name: 'Zeus',
//     species: 'zebra',
//     food: 'grass',
//     askForFood: function () {
//         alert( 'Give me some ' + this.food ); // this.food 'grass'
//     },
//     addToDom: function () {
//         var zebraList = document.getElementById( 'zebra' );
//         var newZebra = document.createElement( 'li' );
//         newZebra.innerHTML = this.name;
//         zebraList.appendChild( newZebra );
//     },
//     rename: function ( newName ) {
//         this.name = newName;
//     }
// };

// var lion1 = {
//     name: 'Fred',
//     species: 'lion',
//     food: 'deer',
//     askForFood: function () {
//         alert( 'Give me some ' + this.food );
//     },
//     addToDom: function () {
//         var lionList = document.getElementById( 'lion' );
//         var newLion = document.createElement( 'li' );
//         newLion.innerHTML = this.name;
//         lionList.appendChild( newLion );
//     }
// };

// var lion2 = {
//     name: 'Nancy',
//     species: 'lion',
//     food: 'deer',
//     askForFood: function () {
//         alert( 'Give me some ' + this.food );
//     },
//     addToDom: function () {
//         var lionList = document.getElementById( 'lion' );
//         var newLion = document.createElement( 'li' );
//         newLion.innerHTML = this.name;
//         lionList.appendChild( newLion );
//     }
// };

// var penguin1 = {
//     name: 'Lisa',
//     species: 'penguin',
//     food: 'deer',
//     askForFood: function () {
//         alert( 'Give me some ' + this.food );
//     },
//     addToDom: function () {
//         var penguinList = document.getElementById( 'penguin' );
//         var newPenguin = document.createElement( 'li' );
//         newPenguin.innerHTML = this.name;
//         penguinList.appendChild( newPenguin );
//     }
// };

// var penguin2 = {
//     name: 'Moose',
//     species: 'penguin',
//     food: 'deer',
//     askForFood: function () {
//         alert( 'Give me some ' + this.food );
//     },
//     addToDom: function () {
//         var penguinList = document.getElementById( 'penguin' );
//         var newPenguin = document.createElement( 'li' );
//         newPenguin.innerHTML = this.name;
//         penguinList.appendChild( newPenguin );
//     }
// };

// var penguin3 = {
//     name: 'Susan',
//     species: 'penguin',
//     food: 'deer',
//     askForFood: function () {
//         alert( 'Give me some ' + this.food );
//     },
//     addToDom: function () {
//         var penguinList = document.getElementById( 'penguin' );
//         var newPenguin = document.createElement( 'li' );
//         newPenguin.innerHTML = this.name;
//         penguinList.appendChild( newPenguin );
//     }
// };

// var redPanda1 = {
//     name: 'Scarlet',
//     species: 'red-panda',
//     food: 'bamboo',
//     askForFood: function () {
//         alert( 'Give me some ' + this.food );
//     },
//     addToDom: function () {
//         var redPandaList = document.getElementById( 'red-panda' );
//         var newRedPanda = document.createElement( 'li' );
//         newRedPanda.innerHTML = this.name;
//         redPandaList.appendChild( newRedPanda );
//     }
// };

// var redPanda2 = {
//     name: 'Moshi',
//     species: 'red-panda',
//     food: 'bamboo',
//     askForFood: function () {
//         alert( 'Give me some ' + this.food );
//     },
//     addToDom: function () {
//         var redPandaList = document.getElementById( 'red-panda' );
//         var newRedPanda = document.createElement( 'li' );
//         newRedPanda.innerHTML = this.name;
//         redPandaList.appendChild( newRedPanda );
//     }
// };
