// play the background video when the header is clicked
// or toggle play/pause

var headerEle = document.querySelector( 'h1' );
headerEle.addEventListener( 'click', videoHandler );

function videoHandler ( event ) {
    var video = document.querySelector( 'video' );
    if ( video.paused ) {
        video.play();
    } else {
        video.pause();
    }
}