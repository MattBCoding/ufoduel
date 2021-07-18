# Test Cases and Execution Report

![Test Case 1 - 4](/assets/readme-images/test-case-1-4.png)

The HTML code for the site was checked using the main validator services of w3.org for HTML. [View Report](https://validator.w3.org/nu/?doc=https%3A%2F%2Fmattbcoding.github.io%2Fufoduel%2F)

The CSS code for the site was checked using the w3.org jigsaw validator service for CSS. [View Report](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fmattbcoding.github.io%2Fufoduel%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en). The report contains no errors, however it does flag 64 warnings which relate to the use of CSS variables and -webkit- or -moz- prefixes. The use of CSS variables were checked on caniuse.com and returned a compatibility of 95.64% across all browsers with all browsers reporting compatibility except Internet Explorer.

The JavaScript was checked in the JSHint validator. [View Image of Report](/assets/readme-images/jshint-report.png). In order to achieve no issues the validator needs to be configured to allow ES6 through the configuration options.

The site was also checked for accessibility by using the WAVE web accessibility evaluation tool from web aim. [View Report](https://wave.webaim.org/report#/mattbcoding.github.io/ufoduel/). The report returns 3 errors relating to empty label fields on the custom toggle switches and custom slide bar which are required elements for the styling. The WAVE checker suggested solution is to ensure there is appropriate title or headings located with the form items. As these items are already in place within the HTML and related to the custom elements the errors were ignored. The report also highlighted one warning, relating to headings within a modal changing from h2 to h4 levels. These headings were utilised with the wider site design taken into account and fit within the structure for other elements which have a h3 heading in between. Therefore this warning was disregarded.

The site was also checked overall through the Lighthouse system built into the Google Chrome Browser. The lighthouse report gave an almost perfect score of 99, 100, 100, 100. Repeated running of the report deviates between a perfect score and the almost perfect score initially achieved suggesting that the difference is extremely minor. The suggested options to achieve an improved score on the initial report related to the delivery of font awesome elements which suggests that the difference between the scores is related to content delivery performance and not the site. [View Image of Report](/assets/readme-images/lighthouse-report.png)

![Test Case 5](/assets/readme-images/test-case-5.png)
![Test Case 6-9](/assets/readme-images/test-case-6-9.png)
![Test Case 10](/assets/readme-images/test-case-10.png)
![Test Case 11-13](/assets/readme-images/test-case-11-13.png)
![Test Case 14-14c](/assets/readme-images/test-case-14-14c.png)
![Test Case 14d-14f](/assets/readme-images/test-case-14d-14f.png)
![Test Case 14g-14h](/assets/readme-images/test-case-14g-14h.png)
![Test Case 14i-15a](/assets/readme-images/test-case-14i-15a.png)
![Test Case 16](/assets/readme-images/test-case-16.png)
![Test Case 17](/assets/readme-images/test-case-17.png)
![Test Case 18-18c](/assets/readme-images/test-case-18-18c.png)
![Test Case 18d-18e](/assets/readme-images/test-case-18d-18e.png)
