# UFO Duel
## Introduction
UFO Duel is a web based game built in JavaScript, HTML and CSS. It is based on the classic game of Rock Paper Scissors and incorporates the modern Rock Paper Scissor Lizard Spock variant. It is targetted towards users who would like a short fun game to play.

![Responsive Screenshot Mockup](/assets/images/amIResponsiveScreenShotOptimized.png)

[View the live website on GitHub Pages](https://mattbcoding.github.io/ufoduel/index.html)
Please note: To open any links in this document in a new browser tab, please press CTRL + Click.

## Table of Contents
* [User Experience Design (UX)](#UX)
    * [The Strategy Plane](#The-Strategy-Plane)
        * [Site Goals](#Site-Goals)
        * [User Stories](#User-Stories)
    * [The Scope Plane](#The-Scope-Plane)
    * [The Structure Plane](#The-Structure-Plane)
        * [Opportunities](#Opportunities)
    * [The Skeleton Plane](#The-Skeleton-Plane)
        * [Wireframes](#Wireframe-mockups)
    * [The Surface Plane](#The-Surface-Plane)
        * [Design](#Design)
            * [Background Image](#background-image)
            * [Colour Scheme](#Colour-Scheme)
            * [Typography](#Typography)
            * [UFO Characters](#ufo-characters)
* [Features](#features)
* [Future Enhancements](#future-enhancements)
* [Testing](#testing)
* [Deployment](#deployment)
* [Credits](#credits)

## UX
### The Strategy Plane
* UFO Duel is intended to be a fun game for individual users to play for short periods of time. Looking at other games, small games typically incorporate fun graphical elements that engage the user. The graphical elements and overall design of games immediately provide the user with a visual indicator of what the site is about and set the tone of the interaction.

#### Site Goals
* To provide users with a fun and simple game to play
* To ensure that navigating the site is easy and intuitive, users don't need to work out where to go.
* To provide users with alternative difficulty levels
* To provide users with alternative methods to play the game
* To ensure the game is fully accessible on desktop and touch enabled devices
* To ensure the game is fully compliant with keyboard commands and screen readers

### User Stories
* As a user I want a fun and simple game to play
* As a user I want to be able to control the time it takes to play the game
* As a user I want to be able to play a more challenging version of the game
* As a user I want to be able to play an easier and quicker version of the game
* As a user I like to play games late at night and want to be able to control the colours to reduce eye strain
* As a user I want to be able to play the game with my keyboard
* As a user I want to be able to use a screen reader to help me play the game

### The Scope Plane
**Features planned:**
* Responsive Design - The site should function correctly across the range of devices the user could potentially use to access the game on such as Desktop, Laptop, Tablet and Mobile's.
* All navigation elements should be contained within the game screen. No need to search for anything.
* The site should be visually stimulating and clear to the user that it is a game.
* Two difficulty levels should be available
* The user should be able to select the number of rounds to play
* Alternative colour options should be available such as a dark mode
* The site should be fully accessible for keyboard users
* The site should be fully accessible for screen reader users

### The Structure Plane

User Story:

> As a user, I want a fun and simple game to play

Acceptance Criteria:
* It should be clear that it is a game, what it is about and how to play.

Implementation:
* The layout, colour scheme font choice and graphic choices will all convey a sense of fun and make it clear to the user that this is a game site. There will be a direct link to the rules of the game on the homepage so the user can easily learn how to play and access information about the game.

User Story:

> As a user, I want to be able to control the time it takes to play the game

Acceptance Criteria:
* The user should be able to choose the amount of time it takes to play the game

Implementation:
* The user will have the ability to choose the amount of rounds required to complete the game. There will be a default number of rounds selected from which the user can increase or decrease the number of rounds in the settings.

User Story:

> As a user, I want to be able to play a more challenging version of the game

Acceptance Criteria:
* The user should be able to choose between different difficulty levels. Increasing the challenge if they desire.

Implementation:
* The user will have the ability to change the difficulty level of the game. In combination with the ability to choose the number of rounds, this will enable the user to make the game easier or more challenging to suit their own preference.

User Story:
> As a user, I want to be able to play a quicker and easier version of the game

Acceptance Criteria:
* The user should be able to choose to play a simplier version of the game.

Implementation:
* The user will have the option to play the classic version of the game as well as the more challenging version that adds lizard and spock options. This in combination with the other controls for number of rounds and difficulty level will enable the user to fully control the amount of time or challenge posed by the game.

User Story:

> As a user, I like to play games late at night and want to be able to control the colours to reduce eye strain

Acceptance Criteria:
* The user should be able to change the colours used through out the site to make them darker, therefore reducing eye strain.

Implementation:
* The user will be able to change the colour scheme between a light and dark mode. Dark mode will make the colour pallette darker in nature in order to reduce eye strain for the user.

User Story:

> As a user, I want to be able to play the game with a keyboard

Acceptance Criteria:
* It should not be necessary for a user wishing to play with a keyboard to have to use another form of input. All actions within the site and during the game should be able to be accomplished using a keyboard.

Implementation:
* The user will be able to navigate the site using only a keyboard. All elements will be individually selectable through the keyboard and standard keyboard controls.

User Story:

> As a user, I want to be able to use a screen reader to help me play the game

Acceptance Criteria:
* No information about the game should rely on vision to be accessible.

Implementation:
* All none text elements that need to be understood by the user will also include aria-labels to provide the information to screen readers.

#### Opportunities
Arising from user stories
| Opportunities | Importance | Viability / Feasibility
| ------ | :------: | :------: |
| ** Provide a fun game environment ** | 5 | 5 |
| ** Provide fun animations to bring the game to life ** | 5 | 5 |
| ** Provide different game modes and difficulty levels ** | 5 | 5 |
| ** Provide ability to control the time the game takes ** | 5 | 5 |
| ** Provide ability to change the colour scheme ** | 5 | 5 |
| ** Provide a fully accessible game for keyboard users ** | 5 | 5 |

### The Skeleton Plane
#### Wireframe mockups
I initially utilised Balsamiq to produce low fidelity wireframes of how the game would appear across different devices. Although the game was intended to be contained within one page, wireframes were produced for the different content that would appear on the page. Utilising Balsamiq enabled me to consider multiple layouts for the game elements before settling on the final design.

#### Main Menu
![Main Menu Wireframe](/assets/wireframes/main-menu.png)

#### Enter Name Screen
![Enter Name Screen Wireframe](/assets/wireframes/enter-name-screen.png)

#### Spock Game Screen
![Spock Game Screen Wireframe](/assets/wireframes/spock-game-screen.png)

#### End of Game Screen
![End of Game Screen Wireframe](/assets/wireframes/endgame-screen.png)

To view the wireframes created for all pages
[Mobile device wireframes](/assets/wireframes/mobile.png)
[Tablet device wireframes](/assets/wireframes/tablet.png)
[Desktop device wireframes](/assets/wireframes/desktop.png)

### The Surface Plane

#### Design

Once happy with the overall structure for the site, and the layout of each section of the content, I produced a full colour mockup within Adobe XD to test the colour scheme and font selection. The default colour scheme was generated using the Adobe colour selector to pull the colours from the vector image used as the background. For the dark colour scheme, I followed the recommendations provided by material.io which can be found at [material.io](https://material.io/design/color/dark-theme.html). It involved establishing shades of colours by overlaying white with varying degrees of opacity applied in order to lighten them. Whilst it was a time consuming process to perfect the design, it was one I found highly enjoyable.

##### Background Image

The background vector image provided the inspiration for the site and the overall theme. It was acquired from the vecteezy.com website where it was available for free download and use. It can be found [here](https://www.vecteezy.com/vector-art/295017-background-scene-with-pine-forest). It had been provided to the Vecteezy site by Graphics RF.

![Original Vector Image](/assets/readme-images/original-vector-image.jpg)

The original image was then amended in Adobe Illustrator to remove multiple elements. This was done for two reasons. Firstly to reduce the overall file size of the image for improved performance across all devices and secondly to reduce the number of elements to reduce visual clutter.

##### Colour Scheme

To ensure that the colours used for different elements provided the required contrast ratio the colour codes were loaded into a contrast checker available at [Contrast Grid](https://contrast-grid.eightshapes.com)

Colour Schemes Used

Day Mode Colour Scheme
![Day time colour scheme](/assets/readme-images/day-mode-colour-scheme.png)

Night Mode Colour Scheme
![Night mode colour scheme](/assets/readme-images/night-mode-colour-scheme.png)

##### Typography

Google fonts was utilised to find a font that would be clean and clear for all users, whilst still conveying an element of fun. I eventually settled on 'Poppins' a sans-serif font.

##### UFO Characters

Whilst I originally experimented with creating UFO vector images for use in the site, I ultimately decided as I wanted to be able to animate the UFO's and change their colouring for the different colour modes it would make more sense to create them using CSS. The experience of creating them as vector images first however did reveal how to layer the different components to create the desired appearance.


## Features
* Common Features
The site is designed with a central column that the JavaScript inserts the relevant HTML into. The title bar and site background remain on all screens.

* Main Menu
The main menu is the page of the site that the user is greeted by when they first visit. The design is based on numerous games to provide an instant indication of what the site is about without requiring the user to read too much text. With the options limited to four clearly labelled choices it is easy for users to know how to navigate the site.
![Main Menu Day](/assets/readme-images/day-main-menu.png)

Dark Colour Scheme
![Main Menu Night](/assets/readme-images/night-main-menu.png)

* Modals
There are two modals available from the main menu, one for the rules of the game and one for the settings. The rules modal contains the rules for both versions of the game and also provides general information about the game.
![Main Rules Modal](/assets/readme-images/rules.png)

The settings modal provides the user with the ability to change the difficulty level of the game, the amount of rounds needed for the game and change the colour scheme.
![Settings Modal](/assets/readme-images/settings.png)

* Name Entry Screen
The second screen the user will come across asks them to enter their name. The user can progress without entering their name if they so choose. 
![Enter Name Screen](/assets/readme-images/day-enter-name.png)

If the user enters a value that is incompatible with the input requirements it will trigger an error message to be displayed.
![Enter Name Screen Error Message](/assets/readme-images/name-error-message.png)

* Game Screens
There are two versions of the game and therefore two different game screens, however they follow the same layout and format.
Classic Game
![Classic Game Screen](/assets/readme-images/classic-game.png)

Spock Game
![Spock Game Screen](/assets/readme-images/spock-game.png)

Night Spock Game Screen
![Spock Game Screen Night](/assets/readme-images/night-spock-game.png)

* End Screens
Depending on whether the user wins or loses the game will determine the message that is displayed at the end of the game.

Winning Message
![You Win Message](/assets/readme-images/night-you-win.png)

Losing Message
![You Lose Message](/assets/readme-images/night-you-lose.png)

## Future Enhancements

* Leaderboard
  * It would be nice to include a leaderboard so that users can compare their score or results with other players, or with themselves over a period of time. This could increase the challenge for users to try and beat other players or their previous scores.
* Different Levels
  * The game could be extended through the implementation of a level structure which would require the player to work their way through the levels to reach the final Boss.
* Multiplayer
  * Network play mode. It would be nice to include an online multiplayer option to the game to enable users to play the game against another person rather than the computer.

## Testing

### Testing Strategy

I took a two stage approach to testing the site. The first stage was continuous testing as the site was being developed. This was especially important to do during development of the JavaScript logic to ensure that the different functions and variables contained or returned the correct data type or values. During the styling of the site I would check the visual appearence within a live server window to preview the changes before they were committed.

For the second stage of testing, I utilised a more formal structured approach and created a test schedule for the site and each logical cycle. I then proceeded to run through the tests individually making a note of any errors or changes to the designed behaviour. Any errors were corrected and then the tests repeated.

A full detailed breakdown of the testing proceedures and methodology can be found in the testing.md file [here](TESTING.md)

The full testing excel file can be accessed [here](/assets/documents/testing-schedule.xlsx). A Pdf version of the completed file can be accessed [here](/assets/documents/ufoduel-site-testing-report.pdf).

#### Testing Overview
Testing was divided into different sections to ensure everything was tested individually with test cases developed for each area.
![Test Overview](/assets/readme-images/test-report-headings.png)

#### Validator Testing
* HTML
  * No errors were returned when passing through the official W3C Validator. [View Report](https://validator.w3.org/nu/?doc=https%3A%2F%2Fmattbcoding.github.io%2Fufoduel%2F)
* CSS
  * No errors were returned when passing through the official W3C CSS Validation Service - Jigsaw. [View Report](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fmattbcoding.github.io%2Fufoduel%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
* JavaScript
  * No errors were returned when passing through the validator service at JSHint.com. ![View Image of Report](/assets/readme-images/jshint-report.png)

* WAVE Web Accessibility
  * Three errors were returned in the WAVE web accessibility report which are detailed in the TESTING.md file along with the resolution. [View Report](https://wave.webaim.org/report#/mattbcoding.github.io/ufoduel/)

* Lighthouse 
  * The lighthouse report gave an almost perfect score of 99, 100, 100, 100. ![View Image of Report](/assets/readme-images/lighthouse-report.png)

#### Notable Bugs
No bugs of note were discovered during the development or testing of the site. However frustration with the different requirements from different browsers was experienced.

## Deployment

* The site was deployed to GitHub pages. The steps to deploy are as follows:
  * In the GitHub repository, navigate to the settings tab
  * Select the pages link from the setting menu on the left hand side 
  * Under the GitHub Pages from the source section drop-down menu, select the master branch 
  * One the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 
  
The live link can be found here - [UFO Duel Live Site](https://mattbcoding.github.io/ufoduel/index.html)

## Credits

### Media
* The background image of the trees was obtained from [Vecteezy.com](https://www.vecteezy.com/vector-art/295017-background-scene-with-pine-forest)
* The favicon was created by using [favicon-generator.org](https://www.favicon-generator.org/). The generator created both the image file and the link tag code for the head of the HTML file.

### Content
* CSS Styling
  * The styling for the custom slider used in the settings modal was amended from the code generated from a [range.css generator](http://danielstern.ca/range.css/#/). I discovered the site from an article on css-tricks.com.
  * The animation for the UFO's sliding in and out of the screen was initially generated on [animista.net](http://animista.net). Whilst I subsequently created several other animations I utilised the original code generated from the site as a reference point.
  * How to create the custom toggle switches used in the settings modal were developed from a tutorial on [w3schools](https://www.w3schools.com/howto/howto_css_switch.asp).
 
### Reference Material
* W3 Schools was used as a reference point for HTML, CSS and JavaScript
* MDN Web Docs was also used as a reference point for HTML, CSS and JavaScript

### Acknowledgements
I'd like to thank my mentor Rahul Lakhanpal for encouraging me to be more ambitious than my original design for the project. The more ambitious design was a lot of fun to create.
