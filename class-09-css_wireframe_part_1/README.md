## **Week 2: Working with the DOM**
## Class 9: Events and Forms

[Schedule](#schedule) | [Announcements](#announcements) | [Objectives](#learning-objectives) | [Notes](#notes) | [Readings](#readings)

<hr></hr>

### Schedule
1. Announcements
1. Code review
1. HTML Forms
1. DOM Events

### Announcements
* Quiz 5 is due tonight!

## Learning Objectives
- Accept user input on a webpage using an HTML form.
- Capture user input from a form using an event listener and event handler.
- Update the DOM using user input.

## Notes
0. Code Review
    * [Devanshu PR](https://github.com/Devanshu1/cookie-stand/pull/1)
1. HTML forms
    * Use form elements to collect/capture information from a user
        * text data, choices, actions
    * Example uses: search bar, email capturing, posting to social media, online quizzes
    * Creating a form: the main elements
        * form
        * fieldset
        * label
        * input
            * **the type of input is determined by the `type` attribute**
        * button
    * Useful attributes:
        * `value`
        * `disabled`
        * `required`
        * `placeholder`
    * What happens when we submit a form?
        * How can we stop this default action?
2. DOM Events
    * Use DOM events to change our website or data based on user interaction
    * Example uses: sending a message in Ryver, paralax scrolling, clicking a hamburger menu
    * Event types we'll be working with:
        * submit
        * click
    * Using an event: listen for it and handle it using JS
        * Three ways to listen:
            1. set element attribute in HTML
            2. set element property in JS
            3. use element method `.addEventListener` in JS <<<< preferred
        * When in the handler: `this` is the element that was listening
    * An event is an object!
        * relevant properties and methods:
            * `.target`
            * `.type`
            * `.preventDefault()`
            * `.stopPropagation()`
    * Event delegation: which element should listen?
        * event propagation
        * bubbling v. capturing
3. Combining DOM events and HTML forms
    * What element should listen to which event?
    * How can we stop the form's default action?
    * How can we access the data the user input into the form?
    * What can we do with that data?
<hr></hr>

## Readings

None for this class, but Chapter 15 in your HTML book will be useful:
- p.361: Key concepts in positioning (block/inline)
- p.363-76: Controlling the position of elements (normal, relative, absolute, fixed, floating)
- pp.377-8: Screen sizes and resolutions
- p.379: Page sizes
- p.381-6: Fixed & liquid layouts
- p.387: Layout grids
- p.391: CSS frameworks
