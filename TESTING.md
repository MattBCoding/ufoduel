# Test Cases and Execution Report

![Test Case 1 - 4](/assets/readme-images/test-case-1-4.png)

The HTML code for the site was checked using the main validator services of w3.org for HTML. [View Report](https://validator.w3.org/nu/?doc=https%3A%2F%2Fmattbcoding.github.io%2Fufoduel%2F)

Due to the site design and the JavaScript inserting and removing HTML depending on where in the site you are it is not possible to fully validate the HTML through the validator service from the deployed site. Therefore I created seperate files for each page and inserted the HTML code that JavaScript inserts to create the complete page. These files were then checked through the validator service to ensure there were no errors. On the first attempt, the validator highlighted multiple errors on both the classic game screen and the spock game screen. These were as a result of duplicating id's for different elements, which I had done inadvertently when creating the first ufo block and duplicating it for the remaining ufo's. A simple fix of removing the unused id's and values fixed the errors.
The validator also highlighted a warning for the potential misuse of aria-labels on the div's that contain the ufo elements. These warnings were ignored as in this specific use case, the use of the aria-labels on the container divs for the ufo elements forms the basis for the game tiles and is the recommended action from webaim.org to allow the tile to be captured by screen readers given that it does not contain any text elements only background styling through CSS.

The validator reports for each of the completed pages:
* [Main Menu](https://validator.w3.org/nu/?doc=https%3A%2F%2Fmattbcoding.github.io%2Fufoduel%2Fassets%2Ftesting%2Fmain-menu.html)
* [Enter Name Screen](https://validator.w3.org/nu/?doc=https%3A%2F%2Fmattbcoding.github.io%2Fufoduel%2Fassets%2Ftesting%2Fname-screen.html)
* [Classic Game Screen](https://validator.w3.org/nu/?doc=https%3A%2F%2Fmattbcoding.github.io%2Fufoduel%2Fassets%2Ftesting%2Fclassic-game-screen.html)
* [Spock Game Screen](https://validator.w3.org/nu/?doc=https%3A%2F%2Fmattbcoding.github.io%2Fufoduel%2Fassets%2Ftesting%2Fspock-game-screen.html)
* [End Screen - Player Win](https://validator.w3.org/nu/?doc=https%3A%2F%2Fmattbcoding.github.io%2Fufoduel%2Fassets%2Ftesting%2Fend-game-screen-win.html)
* [End Screen - Player Lose](https://validator.w3.org/nu/?doc=https%3A%2F%2Fmattbcoding.github.io%2Fufoduel%2Fassets%2Ftesting%2Fend-game-screen-lose.html)


The CSS code for the site was checked using the w3.org jigsaw validator service for CSS. [View Report](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fmattbcoding.github.io%2Fufoduel%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en). The report contains no errors, however it does flag 64 warnings which relate to the use of CSS variables and -webkit- or -moz- prefixes. The use of CSS variables were checked on caniuse.com and returned a compatibility of 95.64% across all browsers with all browsers reporting compatibility except Internet Explorer.

The JavaScript was checked in the JSHint validator. [View Image of Report](/assets/readme-images/jshint-report.png). In order to achieve no issues the validator needs to be configured to allow ES6 through the configuration options.

The site was also checked for accessibility by using the WAVE web accessibility evaluation tool from web aim. [View Report](https://wave.webaim.org/report#/mattbcoding.github.io/ufoduel/). The report returns 3 errors relating to empty label fields on the custom toggle switches and custom slide bar which are required elements for the styling. The WAVE checker suggested solution is to ensure there is appropriate title or headings located with the form items. As these items are already in place within the HTML and related to the custom elements the errors were ignored. The report also highlighted one warning, relating to headings within a modal changing from h2 to h4 levels. These headings were utilised with the wider site design taken into account and fit within the structure for other elements which have a h3 heading in between. Therefore this warning was disregarded.

The site was also checked overall through the Lighthouse system built into the Google Chrome Browser. The lighthouse report gave an almost perfect score of 99, 100, 100, 100. Repeated running of the report deviates between a perfect score and the almost perfect score initially achieved suggesting that the difference is extremely minor. The suggested options to achieve an improved score on the initial report related to the delivery of font awesome elements which suggests that the difference between the scores is related to content delivery performance and not the site. [View Image of Report](/assets/readme-images/lighthouse-report.png)

![Test Case 5](/assets/readme-images/test-case-5.png)

The site accessibility was also checked through the use of a screen reader. By installing a screen reader extension into Google Chrome, available from the Chrome extensions store, I was able to navigate the site based on the instructions of the screen reader. This allowed me to test that each element was able to be correctly read by the screen reader and that the game tiles specifically were able to be read by the screen reader given that the names are within aria-labels. I was also concerned that the screen reader would not be able to correctly interpret the animated text elements. These concerns were unfounded with the screen reader able to read aloud all elements of the site.

![Test Case 6-9](/assets/readme-images/test-case-6-9.png)

The site was checked for responsiveness and behaviour of animations across Google Chrome, Firefox, Opera and Safari. I also tested the site on iOS Safari within an iPhone X and iPad Pro. Within the developer tools of each browser, or by resizing the browser window manually, the site was checked for the following devices: iPad Pro, iPad, iPad Mini, iPhone X, iPhone 6/7/8 Plus, iPhone 6/7/8. iPhone 5/SE, Galaxy S5, Pixel 2 and Pixel 2XL. This site was checked for conformity to design in both portrait and landscape orientations. Whilst the site is designed for a portrait orientation on handheld devices it was important that it did not break the site design if the user prefers a landscape orientation.

The only issue detected whilst performing the final tests were with the buttons on the in game quit modal which within a firefox browser became oversized. A max-height style rule was added to the CSS file to prevent this issue from occuring.

![Test Case 10](/assets/readme-images/test-case-10.png)

The site was checked for users who have JavaScript disabled within their browsers. It successfully displays a warning message along with instructions on how to access the site to the user.

![Test Case 11-13](/assets/readme-images/test-case-11-13.png)

The operation of the initial screen elements, along with rules and settings modals were tested to ensure they worked as designed. They were also checked for the JavaScript logic to ensure that no errors were encountered.

![Test Case 14-14c](/assets/readme-images/test-case-14-14c.png)

The user has the option to change some of the game variables such as difficulty level or the number of rounds required to complete. The changes made within the settings modal were checked through out the site to ensure that the desired changes occured correctly. They were tested across both versions of the game, the classic and spock modes.

![Test Case 14d-14f](/assets/readme-images/test-case-14d-14f.png)

On top of ensuring that if the user changed the required number of rounds for a win across both game modes, it was important to check that the logic if the user lost the game also followed the desired amount of rounds.

In game modals for rules and the ability to quit the game were checked in the classic game mode on hard difficulty to ensure they operated, displayed and closed correctly.

![Test Case 14g-14h](/assets/readme-images/test-case-14g-14h.png)

The in game modals were also checked in the spock game mode on hard difficulty and the classic game mode on easy difficulty.

![Test Case 14i-15a](/assets/readme-images/test-case-14i-15a.png)

The in game modals were finally checked in the spock game mode on easy difficulty. 

Game functionality was checked across the easy difficulty setting for both the classic and spock modes. This was to ensure the game operated correctly with the final resolution to the game successfully being accessed at the appropriate times.

![Test Case 16](/assets/readme-images/test-case-16.png)

The functionality of the user's ability to enter a name was tested extensively to ensure that any incorrect input by the user successfully triggered the error handling. It was also checked to ensure that correct input by the user was successfully integrated into the game experience.

A fail safe allowing the user to play the game without entering a name was also checked to ensure the game handled the event correctly.

No errors were discovered.

![Test Case 17](/assets/readme-images/test-case-17.png)

The ability for the user to change the colour scheme was extensively tested across multiple browsers to ensure full compatibility. All elements of the game were checked to ensure that the appropriate colour changes occured.

No issues were discovered.

![Test Case 18-18c](/assets/readme-images/test-case-18-18c.png)

Accessibility was one of the main goals for the project. Being able to navigate the site, access all elements and control the game with a keyboard was important. Therefore all elements were tested to be fully compliant. One issue was discovered during the testing process in that users were unable to scroll the main rules modal without clicking into the modal with a mouse. This issue was rectified by adding a tabindex to the modal content which allows a keyboard user to select that element with the tab key, thus enabling the ability to scroll the content.

![Test Case 18d-18e](/assets/readme-images/test-case-18d-18e.png)

Both game modes were extensively tested for use with a keyboard to ensure that users could access and play the game with a keyboard. No issues were found, with elements behaving as designed.
