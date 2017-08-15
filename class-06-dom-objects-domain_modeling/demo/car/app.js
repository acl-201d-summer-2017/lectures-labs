'use strict';

/*
    car
    salesperson
*/

var car = {
    make: 'Fiat',
    model: '500',
    color: 'red',
    year: '2016',
    value: '$18,000',
    addToDom: function () {
        var lotOne = document.getElementById( 'lot-one' );
        var carDiv = document.createElement( 'div' );
        carDiv.innerHTML = '<h1>' + this.make + ' ' + this.model + '</h1>';
        lotOne.appendChild( carDiv );
    }
};

car.addToDom();