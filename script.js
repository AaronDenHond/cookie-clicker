// clicks initialized at 0 ,tracking clicks
// selecting the label via clicksLabel to be able to change innerHTML easily

let clicks = 0;
let clicksLabel = document.getElementById("counter");

// cookies initialized at 0, tracking cookies
// selecting the label via cookiesLabel to be able to change innerHTML easily

let cookies = 0;
let cookiesLabel = document.getElementById("cookies");

// create variable clickerModifier that acts as upgrade : higher clickerModifier means more cookies per click
let clickerModifier = 0

// button to register clicks, not really necessary
let button = document.getElementById("run");


let multiplierElement = document.getElementById("multiplier");

let autoclickElement = document.getElementById("auto-click");

//initial click upgrade cost and modifier
let cost = 20
const modifier = 1.5;

//initial auto click upgrade cost, uses same modifier for now
let autoCost = 30;

//var for bordercolor  funds for upgrade1
let noCookiesAlertBonus = document.getElementById("noCookiesBonus");
////var for bordercolor  funds for upgrade2
let noCookiesAlertAuto = document.getElementById("noCookiesAuto");

//wally gif milestone var
let milestone = 30;
let isEddyClickable = false; // we need to check if Eddy is allowed to be clicked, if we dont we can spamclick for points even when he doesnt show.



// EventListeners on buttons to get the functionalities we want on click


button.addEventListener("click", () => {
    clicks += 1; // clicks = clicks + 1
    clicksLabel.innerHTML = "Clicks:" + " " + clicks;

    cookies += 1 + clickerModifier; // niet clicks bij tellen

    cookiesLabel.innerHTML = "Cookies:" + " " + cookies;
    // if elses for diff possibilities of border color
    if (cookies >= cost && cookies >= autoCost) {
        noCookiesAlertBonus.style.borderColor = "green";
        noCookiesAlertAuto.style.borderColor = "green";
    }

    else if (cookies < cost && cookies < autoCost) {
        noCookiesAlertBonus.style.borderColor = "red";
        noCookiesAlertAuto.style.borderColor = "red";
    }
    else if (cookies >= cost && cookies < autoCost) {
        noCookiesAlertBonus.style.borderColor = "green";
        noCookiesAlertAuto.style.borderColor = "red";
    }

    else if (cookies < cost && cookies >= autoCost) {
        noCookiesAlertBonus.style.borderColor = "red";
        noCookiesAlertAuto.style.borderColor = "green";
    }
    // check if multitude of 30 (30,60,90,...) via modulo. Modulo checks remainder, so if remainder is 0...
    if (cookies % 30 == 0) {
        
        // allowed to click eddy when we call him with wallyCalc, he shows up
        wallyWawCalc(30);
        isEddyClickable = true;
        //we create a setTimeout function, AFTER 2 seconds everything in the function body gets executed.
        setTimeout(function () {
            document.getElementById("eddyWawImg").src = "";
            isEddyClickable = false;
            // after 2 secs src string is cleared and clicking no longer allowed to click eddy AFTER 2 secs CALLBACK. Set eddyClick FALSE 1
        }, 2000)



    }




});
//here we click eddy, check if ALLOWED to click
document.getElementById("eddyWaw").addEventListener("click", () => {
    if (isEddyClickable) {
        cookies += 30; // add cookies
        document.getElementById("eddyWawImg").src = "";
        cookiesLabel.innerHTML = "Cookies:" + " " + cookies; // DISPLAY cookies
        
        //set isEddyClickable to false so we cant spam click, after 1 click on Eddy we set to false. SET eddyClick FALSE 2
    }
});



document.getElementById("multiplier").addEventListener("click", () => {

    if (cookies >= cost) {          //check if enough cookies not other way around
        clickerModifier = clickerModifier + 1; // moet zo om op te slagen clickerModifier += 1;
        cookies = Math.floor(cookies - cost);
        let costRounded = Math.floor(cost * modifier);
        multiplierElement.innerHTML = `Cookies x${clickerModifier + 1}/  ${costRounded} Cookies`; // +1 cause base modifier is 0 so might be confusing for user
        cost = upgradeCost(cost);


    }


});



document.getElementById("auto-click").addEventListener("click", () => {
     
    if (cookies >= autoCost) {
        clickerModifier++;
        setInterval(function () {
            cookies += clickerModifier;
            cookiesLabel.innerHTML = "Cookies:" + " " + cookies;
             
        }, 1000)
        cookies = Math.floor(cookies - autoCost);
        let autoCostRounded = Math.floor(autoCost * modifier);
        autoclickElement.innerHTML = `Auto x${clickerModifier + 1}/ Cookies ${autoCostRounded}`;
        autoCost = upgradeAutoCost(autoCost);
       
        
    }
    
});



// upgradecost scaling function for clickerModifier (aka clicker upgrade) and auto clicker upgrade

const upgradeCost = (cost) => {

    const modifier = 1.5; // modifier const always 1.5
    return cost * modifier;
}

const upgradeAutoCost = (autoCost) => {

    const modifier = 1.5; // modifier const always 1.5
    return autoCost * modifier;
}

//function to check if milestone

const wallyWawCalc = (milestone) => {   //function wallyWawCalc (milestone){} // andere milestone want hier parameter
    const wallyModifier = 3;
    let eddyWaw = document.getElementById("eddyWawImg");
    if (milestone == 30) {
        eddyWaw.src = "img/eddyGif.gif";
    }


    return milestone * wallyModifier;

}



