let count = 0;
let button = document.getElementById("run");
let counter = document.getElementById("counter");

document.getElementById("run").addEventListener("click", () => {
count += 1;
counter.innerHTML =  count;
});