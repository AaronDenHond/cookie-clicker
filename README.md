# cookie-cutter

UPDATE 11/5/2021

First version of CSS. Title, overview of clicks and cookies (aka currency).
Appropriate chocolate themed colors and font. Cookie image as a clicker instead of a button.


UPDATE 10/5/2021

BeCode Antwerp Giertz exercise making a cookie clicker.

HTML,CSS and JS were used for this project.

First step was adding the elements in HTML and the necessary JS to make the application interactive.

HTML : 

Made 2 labels for Cookies and Clicks tracking.
Made 3 buttons, 1 for clicking and 2 for upgrades.

JS : 

Necessary variables, 2 upgradefunctions, eventlisteners on buttons.
Tracking of clicks and current cookies, working upgrades on click and autoclick.

ISSUES :

Lost a lot of time trying to make a scalable upgradeCost function. Solution (thanks to classmate Tom and 
coach Sicco : 
const upgradeCost = (cost) => {

    const modifier = 1.5; 
    return cost * modifier;
}

in button.EventListener :
cost = upgradeCost(cost);
https://aarondenhond.github.io/cookie-cutter/

