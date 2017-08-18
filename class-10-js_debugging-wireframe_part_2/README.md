# **Week 2: Working with the DOM**
# Class 10: JS Debugging and More CSS Layout

[Schedule](#schedule) | [Announcements](#announcements) | [Objectives](#learning-objectives) | [Notes](#notes) | [Readings](#readings)


<hr></hr>

### Schedule
1. Announcements
1. Code review
1. Debuggin' 🐛
1. CSS layouts and libraries

### Announcements
* Due Sunday: Quiz 6 & Salmon Cookies!
* Important info
    * To pass the class, you need 2 of 3:
        1. 90% grade
        2. 70% 301 entrance exam
        3. instructor approval
* Project week in a week!!!
    * 4th week = no lectures, no labs, all project work
    * 4 teams: [3,3,3,4]
    * Think of 2-3 ideas, pitch to SJ & TA's Friday afternoon
    * Basic requirements:
        * 3 pages
        * 2 pages must take and use user input
        * Everyone must contribute to HTML, CSS, and JS
* Example 201 projects
    * [turducken](https://sevfitz.github.io/turducken/login.html)
        * user: boogie, pw: jjboogz
    * [team rocket man](jchurchman.github.io/teamrocketman)
    * [memory game](https://hpats67.github.io/memory-card/)
    * [yacht-zoe](https://yachtzoes.github.io/yachtzoe_project/index.html)
    * [madlibs](http://brandon-parker.github.io/mortality/index.html)


## Learning Objectives

* Style a webpage's layout, text, and images using CSS.
* Create various types of layouts using CSS layout principles including block, inline, relative, absolute, float, and fixed.
* Track down and squash bugs in HTML, CSS, and JS using the Chrome Developer tools.
* Write easy to understand code using best practices.

## Notes
* Review
    * quiz review
    * `event.target` for a submit event is the form, not the button! You can't submit a button (:
    * let's play "when does this code run?"
* Debugging
    * one of the HARDEST and MOST FREQUENT things about programming = debugging
    * Tools: Chrome's Dev tools, `console.log`, `debugger;`, most importantly: your thinking process!
    * WHAT info is wrong? WHERE and WHEN in my code do I use that info?
    * see [helpful-file](../helpful-files/dan-debugging.md)
    * [practice!](http://jsbin.com/libisolaja/edit?html,js,output)
* CSS
    * [Elements and principles of design](http://www.j6design.com.au/6-principles-of-design/)
    * using flexbox
        * used to arrange elements inside a container
    * adding third party css libraries
        * [skeleton](http://getskeleton.com/)
        * [normalize](https://necolas.github.io/normalize.css/) (CSS Reset)
    * fun image properties
        * [background-blend-mode](https://developer.mozilla.org/en-US/docs/Web/CSS/background-blend-mode) (for background images)
        * [filter](https://css-tricks.com/almanac/properties/f/filter/)

<hr></hr>

## Readings

**JS Chapter 10: "Error Handling & Debugging"**

- p.452: Order of execution
- p.456: Execution context & hoisting
- p.457: Understanding scope
- p.458: Understanding errors
- p.462: How to deal with errors
- p.463: A debugging workflow
- p.476: Breakpoints
- p.484: Debugging tips
- p.485: Common errors
