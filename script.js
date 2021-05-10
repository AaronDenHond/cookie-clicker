// button with counter on click initialized at 0
let clicks = 0;
let clicksLabel = document.getElementById("counter");

let cookies = 0;
let cookiesLabel = document.getElementById("cookies");

let clickerModifier = 0

let button = document.getElementById("run");

let multiplierElement = document.getElementById("multiplier");

let autoclickElement = document.getElementById("auto-click");
let cost = 20

document.getElementById("run").addEventListener("click", () => {
    clicks += 1; // clicks = clicks + 1
    clicksLabel.innerHTML = "Clicks:" + " " + clicks;

    cookies += 1 + clickerModifier; // niet clicks bij tellen
    console.log(cookies);
    cookiesLabel.innerHTML = "Cookies:" + " " + cookies;

});

document.getElementById("multiplier").addEventListener("click", () => {



    if (cookies < cost) {
        alert("Not enough credits!");

    }

    else {
        clickerModifier = clickerModifier + 1; // moet zo om op te slagen clickerModifier += 1;
        cookies = cookies - cost;
        multiplierElement.innerHTML = `x${clickerModifier}`;
        cost = upgradeCost(cost); 

    }
});



document.getElementById("auto-click").addEventListener("click", () => {
    setInterval(function () {
        button.click()
    }, 1000)
});



// upgradecost scaling function

const upgradeCost = (cost) => {
    
    const modifier = 1.5; // modifier const always 1.5
    return cost * modifier;
    

}

