var allStudents = [];

function Student ( name, favEle, age ) {
    this.name = name;
    this.favEle = favEle;
    this.age = age;
}

Student.prototype.yellAge = function () {
    alert( 'I AM ' + this.age + ' YEARS OLD.' );
}

Student.prototype.render = function () {
    var list = document.querySelector( 'ul' );
    var newLi = document.createElement( 'li' );

    newLi.innerHTML = this.name + " &#x1F60D;'s " + this.favEle + ' (' + this.age + ')';
    list.appendChild( newLi );
}

// handle form submission
var submissionForm = document.getElementById( 'elementsForm' );
submissionForm.addEventListener( 'submit', submitHandler );

function submitHandler ( event ) {
    event.preventDefault();

    var name = this.name.value;
    var htmlEle = this.ele.value;
    var age = this.age.value;

    var student = new Student( name, htmlEle, age );
    student.render();
    allStudents.push( student );
    
    saveToLS( 'students', allStudents );
    /* save array of allStudents to localStorage after adding new student
    use function saveToLS() instead of following 2 lines so can save lots of things to LS!

    var allStudentsString = JSON.stringify( allStudents );
    localStorage.setItem( 'students', allStudentsString ); */

    this.reset();
}

function saveToLS ( key, value ) {
    var str = JSON.stringify( value );
    localStorage.setItem( key, str );
}

function getFromLS ( key ) {
    return JSON.parse( localStorage.getItem( key ) );
}

// got the students from localStorage
var storedStudents = getFromLS( 'students' );
// var storedStudents = JSON.parse( localStorage.getItem( 'students' ) );

if ( storedStudents ) {
    for ( var i = 0; i < storedStudents.length; i ++ ) {

        // create student object
        var studentData = storedStudents[i]; // { name: '', favEle: '', age: '' }
        var student = new Student( studentData.name, studentData.favEle, studentData.age );

        // render to the DOM
        student.render();

        // add student to allStudents
        allStudents.push( student );
    }
}

/*
    WHAT TO SAVE IN LOCALSTORAGE???

    NOT THIS:
    student name as key and data as value
    - "sj": "canvas, 3"
    - "joe": "div, 5"

    THIS:
    save array of all the students under ONE key, instead of multiple keys
    - "students": [{name: sj, etc}] // array of all students
*/