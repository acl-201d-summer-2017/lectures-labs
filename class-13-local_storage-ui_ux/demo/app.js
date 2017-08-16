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

    this.reset();
}

// TODO save submissions in LocalStorage 
//      load submissions from LocalStorage and display