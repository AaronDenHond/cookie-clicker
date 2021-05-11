# cookie-cutter



Project : creating a browser-based cookie clicker game


Core functionality (core tasks/features of the program) 

- Clicking the cookie increase the "score" aka amount of cookies by a certain amount. 

Check

- The passive amount/amount per click is modified via purchaseable upgrades.
1. more points per click
2. passive amount over time with an autoclicker   

Check                   

- Visual cue if upgrade is possible/not possible depending on border color 
Green : can afford upgrade
Red : cannot yet afford upgrade
Check

- Milestone every so often, Eddy Wally pops up and says "waw"

- Clicks per second tracking

(Optional (feasible??) : Button with 2x points for a given duration randomly pops up on the screen)

Roadmap 

1) Make the core elements in HTML. Give said elements clear classes/ID's.

2) Declare the necessary variables in the script.js file.

Cookies, clicks, buttons,...

3) Get basic funtionality going :
 - clicking cookie increases total score.
- clicking the upgrade buttons gives feedback
- score modifier via upgrades works
…

4) Get a raw CSS template to visualize where everything will go.

5) Code the more extensive core functionalities.

6) Finalize the CSS.





6) Finalize the CSS.
UPDATE 11/5/2021

First version of CSS. Title, overview of clicks and cookies (aka currency).
Appropriate chocolate themed colors and font. Cookie image as a clicker instead of a button.
Pointer update on cookie hover.
scale transform on hover.

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

