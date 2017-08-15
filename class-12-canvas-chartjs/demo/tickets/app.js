'use strict';

// TODO draw with canvas example
var canvas = document.getElementById( 'squares' );
var context = canvas.getContext( '2d' );

context.fillStyle = 'green';
context.fillRect(0,200,50,300);

context.fillStyle = 'blue';
context.fillRect(100,400,50,100);

context.fillStyle = 'yellow';
context.fillRect(200,450,50,50);

// setInterval( drawLines, 50 );

// function drawLines () {
//     context.fillStyle = 'green';
//     context.fillRect(0,0,500,500);
//     for ( var i = 0; i < 5; i ++ ) { 
//         context.beginPath();
//         context.moveTo( 250, 250 );
//         context.lineTo( randomZ(0, 500), randomZ(0, 500) );
//         context.strokeStyle = 'blue';
//         context.lineWidth = 7;
//         context.stroke();
//     }
// }

// function randomZ ( min, max ) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// // Chartjs example
var chartCanvas = document.getElementById( 'flights' );

var americanData = {
    label: 'american airlines',
    data: [100, 50, 600, 800], // number of votes
    backgroundColor: 'rgba(255,0,0,.5)',
    lineTension: 0
};

var alaskaData = {
    label: 'alaska airlines',
    data: [70,120,40,300],
    backgroundColor: 'rgba(0,0,255,.5)',
    lineTension: 0
};

// creating a new Chart w/o dissecting the data into variables
var flightChart = new Chart ( chartCanvas,  {
    type: 'bar',
    data: {
        labels: ['jan','feb','mar','apr'], // bag, banana, dog duck
        datasets: [americanData, alaskaData]
    },
    options: {
        title: {
            display: true,
            text: 'Outrageous Flight Prices'
        },
        legend: {
            display: false
        }
    }
});

/*
    config object in context of bus-mall

    {
        type: 'bar',
        data: {
            labels: ['bag','banana','boombox','bouncy house','scissors'], // item names
            datasets: [
                {
                    label: 'Voter 1', // label for votes
                    data: [0,4,2,0,1] // number of votes corresponding to items in labels
                }
            ]
        }
    }
*/