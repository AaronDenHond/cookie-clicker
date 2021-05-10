// button with counter on click initialized at 0
let clicks = 0;
let clicksLabel = document.getElementById("counter"); 

let cookies = 0;
let cookiesLabel = document.getElementById("cookies");

let clickerModifier = 0

let button = document.getElementById("run");

document.getElementById("run").addEventListener("click", () => {
clicks += 1; // clicks = clicks + 1
clicksLabel.innerHTML = "Clicks:" + " " +  clicks;

cookies += 1 + clickerModifier; // niet clicks bij tellen
console.log(cookies);
cookiesLabel.innerHTML = "Cookies:" + " " + cookies  ;

});

document.getElementById("multiplier").addEventListener("click", () => {

 clickerModifier = clickerModifier + 1; // moet zo om op te slagen clickerModifier += 1;
 
});

