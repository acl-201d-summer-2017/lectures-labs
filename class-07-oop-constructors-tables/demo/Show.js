'use strict';

function Show ( title, time, location ) {
    this.title = title;
    this.time = time;
    this.location = location;
}

Show.prototype.reschedule = function ( newTime ) {
    this.time = newTime;
}

Show.prototype.announce = function () {
    alert( this.title + ' is starting at ' + this.time + '! Come to ' + this.location );
}

Show.prototype.render = function () {
    var tbody = document.getElementsByTagName( 'tbody' )[0];
    var newRow = document.createElement( 'tr' );
    newRow.id = 'monkey'; // add id to table row element

    // TODO use an array and loop to create cells
    // TODO write a function to create cells
    var emptyCell = document.createElement( 'td' );

    var titleCell = document.createElement( 'td' );
    titleCell.innerText = this.title;

    var timeCell = document.createElement( 'td' );
    timeCell.innerText = this.time;
    
    var locationCell = document.createElement( 'td' );
    locationCell.innerText = this.location;
    
    newRow.appendChild( emptyCell );
    newRow.appendChild( titleCell ); // add title cell to show's row
    newRow.appendChild( timeCell ); 
    newRow.appendChild( locationCell ); 

    tbody.appendChild( newRow ); // add entire row to tbody

    // 
    console.log( 'tbody = ', tbody );
    console.log( 'newRow = ', newRow );
    console.log( 'titleCell = ', titleCell );
}

var lionShow = new Show ( 'Lion and Friends', '1:30', 'Massai Ave.' );
var redShow = new Show ( 'Red Panda! Red Panda!', '2:30', 'Bamboo St.' );
var zebraShow = new Show ( 'What color is a zebra?', '4:30', 'Massai Ave.' );
var penguinShow = new Show ( 'Penguin Swim', '4:30', 'Artic Circle' );

zebraShow.render();