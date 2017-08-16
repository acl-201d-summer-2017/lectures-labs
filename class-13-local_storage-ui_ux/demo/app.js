// TODO save submissions in LocalStorage so I can refresh the page and not lose my list

// on load get saved submissions and add to the list
// var submissions = JSON.parse( localStorage.getItem( 'submissions' ) ) || [];
// if ( submissions ) {
//     submissions.forEach( function ( submission ) {
//         addToList( submission );
//     });
// }

/* using a separate array

    var submissions = [];
    var savedSubmissions = JSON.parse( localStorage.getItem( 'submissions' ) );
    if ( savedSubmissions ) {
        // OPTION 1 set our submissions array to our save submissions data
        submissions = savedSubmissions; 

        submissions.forEach( function ( submission ) {
            addToList( submission );
            // OPTION 2 add saved submissions to our submissions array and save
            // saveToLocal( submission );
        });
    }
*/



// handle form submission
var submissionForm = document.getElementById( 'elementsForm' );
submissionForm.addEventListener( 'submit', submitHandler );

function submitHandler ( event ) {
    event.preventDefault();

    var name = this.name.value;
    var htmlEle = this.ele.value;
    var list = document.querySelector( 'ul' );
    var newLi = document.createElement( 'li' );

    newLi.innerHTML = name + " &#x1F60D;'s " + htmlEle;
    list.appendChild( newLi );

    this.reset();
}

// function saveToLocal ( submission ) {
//     submissions.push( submission );
//     localStorage.setItem( 'submissions', JSON.stringify( submissions ) );
// }



/*

    - show LACK of persistance
    - introduce LocalStorage - baby database, only stores STRINGS
        - show scratch tab use of local storage
        - show localStorage in dev console
            - update info on screen
        - stores OBJECTS using JSON
        - JS Object Notation - looks like an object, but isn't quite the same thing
            - {"keys":"values"}
            - everything in strings
            - we have 2 methods to change js objs -> json string and from json -> obj
    
        - in console:
            - GET data with localStorage.getItem(name)
            - SET with localStorage.setItem(name, data)
            - example again using JSON methods

        - okay, now integrate with our form handler!
        - save data on submit

        - okay, now GET data on load!
*/