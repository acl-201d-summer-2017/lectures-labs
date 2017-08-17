## **Working with Libraries**
# Class 14: CSS Animations and JS Prototype Inheritance

[Schedule](#schedule) | [Announcements](#announcements) | [Objectives](#learning-objectives) | [Notes](#notes) | [Readings](#readings)

<hr></hr>

### Schedule
1. Announcements 
1. JS Inheritence
1. CSS Animations
1. Code review

### Announcements
* Quiz 8 due tonight!
* TEAMS
    - 🍿
        - michael
        - devanshu
        - zach
        - robin

    - 🐩
        - christina
        - shane
        - jennifer
        - nick

    - 🐔
        - morgan
        - david
        - eli
        - frank    
* Basic final project requirements:
    * 3 pages
    * 2 pages accept and do something with user input
    * Everyone must contribute to all HTML, JS, and CSS
* Technical requirements:
    * CLEAN, DRY and well structured code
    * Data must persist on page reload
    * Use OOP to structure your code
    * An about the team page
* Tomorrow afternoon your team should have at least two ideas you're excited to work on. We'll discuss them and see which would be best for you to do!
    * Monday you will need to have a full proposal for the final project idea. More details about that tomorrow.
* Questions?


## Learning Objectives
- Create JavaScript objects that inherit properties using JavaScript prototype inheritance. 
- Add visually pleasing animations to a web page using CSS animations.

## Notes
* JS Inheritence
    * Every object in JS has a prototype - the Object object
    * **prototype**: "a first, typical or preliminary model of something, especially a machine, from which other forms are developed or copied."
    * A copy of the object's prototype is accessible through the `__proto__` property
    * The prototype chain: JS objects will look for properties on themselves first, then their prototypes
        * `Array.hasPropertyOf` comes from `Object.hasPropertyOf`
* CSS Animations
    * [CodePens you can learn from!](https://webdesign.tutsplus.com/articles/10-examples-of-animation-on-codepen-you-can-learn-from--cms-28244)
    * [MDN animatable properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties)
    * Transitions ~ when an element changes state: on hover
        * use `transition` css property on the element you want to animate
    * Keyframes ~ not tied to a state change
        * use `animation` property on the element you want to animate AND create `keyframes` block outlining the animation
        * [another useful article](https://robots.thoughtbot.com/css-animation-for-beginners)

<hr></hr>

## Readings

**CSS Transforms, Transitions, & Animations**

- [Read this article on CSS Transforms](http://learn.shayhowe.com/advanced-html-css/css-transforms/)
- [Read this article on CSS Transitions & Animations](http://learn.shayhowe.com/advanced-html-css/transitions-animations/)
- [8 simple CSS3 transitions that will wow your users](http://www.webdesignerdepot.com/2014/05/8-simple-css3-transitions-that-will-wow-your-users)
- [6 Buttons animated](http://codepen.io/retyui/pen/ByoaXV)
- [CSS3 Animations: Keyframes](http://codepen.io/akshaychauhan/pen/oAfae)
- [ANIMATE!](http://codepen.io/ryansobol/pen/NPZrNw)
- [404](http://codepen.io/kieranfivestars/pen/MYdQxX)
- [Pure CSS Bounce Animation](http://codepen.io/dp_lewis/pen/gCfBv)
