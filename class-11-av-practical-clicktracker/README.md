## **Week 3: Working with Libraries**
## Class 11: A/V, Practical Info, and Getting the Vote Tracker Project Started

[Schedule](#schedule) | [Announcements](#announcements) | [Objectives](#learning-objectives) | [Notes](#notes) | [Readings](#readings)


<hr></hr>

### Schedule
1. Announcements & Resource sharing
1. Code Review/Preview
1. Media: images, audio, video
1. SEO

### Announcements
* Trust the struggle, recognize when you're worrying about something completely different from last week (aka making progress).
* Surveys?

## Learning Objectives
* Track user interaction via clicks using event listeners and event handlers.
* Plan and start working on a new project using OOP.
* Display images and data in the DOM using arrays and DOM manipulation methods.

## Notes
* Event delegation
    * Which element should listen for the event?
    * Event propagation: bubbling v. capturing
* SEO
    * Search Engine Optimization
        * keywords throughout your content
        * html tags: title, meta description
    * stop search engines from indexing (or including) your site with the robots meta tag
* Media: video, audio
    * file types: webm, ogg, mp4, mp3, wav, flac
        * [browser dependant](https://developer.mozilla.org/en-US/docs/Web/HTML/Supported_media_formats#File_Formats)
    * unsupported behavior
    * attributes: `src`, `type`, `controls`, `autoplay`, `loop`, `muted`
    * how to control and change attributes with JS
        * `.play()` and `.pause()`
* Lab Prep
    * Directory structure && file names
    * bus-mall/
        * css/
        * js/
            * app.js || script.js (THIS)
            * app_week2.js (NOT THIS)
        * images/
        * index.html (THIS)
            * index2.html (NOT THIS)
        * user_stories.md
        * .gitignore, .eslintrc, README.md
    * user stories
        * As a focus group participant, I want to click on an image to vote for it.
        * As a focus group participant, I want the page to repopulate with images. 
        * As a focus group participant, I want to know when I have used up all of my votes.
    * TODOs
        * write Constructor for Item 
            * with properties: 
                * displayName (human friendly string)
                * filePath (string)
                * displayCount (number)
                * voteCount (number)
                * id (html friendly string)
            * render() = display on the DOM
        * selectRandomItems() = randomly selects 3 items
            * checkIfShown() = prevents just shown items
        * voteHandler() = track vote counts

        * possible order of work
            1. write constructor
            2. show three images in DOM
            3. randomize three images
            4. disallow repeats
            5. ???
            6. be able to click on image to re-draw

<hr></hr>

## Readings
**HTML & CSS Chapter 9: "Flash, Audio, Video"**
- p.484: Debugging tips
- p.485: Common errors

**HTML & CSS Chapter 16: "Images"**
- p.484: Debugging tips
- p.485: Common errors

**HTML & CSS Chapter 19: "Practical Information"**
- p.484: Debugging tips
- p.485: Common errors
