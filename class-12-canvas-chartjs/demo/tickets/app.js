'use strict'

// // Chartjs example
var canvas = document.getElementById( 'flights' );

// creating a new Chart w/o dissecting the data into variables
var flightPrices = new Chart ( canvas, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'spirit airlines',
                data: [500,100,400,100,554,333],
                backgroundColor: 'rgba(200,200,100,.5)',
                lineTension: .5
            },
            {
                label: 'american airlines',
                data: [800,200,200,400,254,103],
                backgroundColor: 'rgba(200,100,200,.5)',
                lineTension: 0
            }
        ]
    },
    options: {
        title: {
            display: true,
            text: 'Flight Prices'
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});






// TODO draw with canvas example

var canvas = document.getElementById( 'squares' );
var context = canvas.getContext( '2d' );


context.fillStyle = "green";
context.fillRect( 500, 0, 20, 500 );

context.fillStyle = "green";
context.fillRect( 450, 460, 20, 40 );

context.fillStyle = "green";
context.fillRect( 400, 400, 20, 100 );


// for (var i = 0; i < 20; i ++) {
//     context.beginPath();
//     context.strokeStyle = "white";
//     context.moveTo( randomZ(100,400), randomZ(100,300) );
//     context.lineTo( randomZ(0,500), randomZ(0,400) );
//     context.stroke();
// }

function randomZ ( min, max ) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}