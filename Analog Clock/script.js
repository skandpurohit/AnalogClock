const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");


function runTheClock(){

var currentDate = new Date();
console.log(currentDate);

let hr = currentDate.getHours();
let min = currentDate.getMinutes();
let sec = currentDate.getSeconds();

console.log("Hours: " + hr + " Minutes: " + min + " sec: " + sec);

let hrPosition = hr*360/12 + (min*(360/60)/12);
let minPosition = (min*360/60)+(sec*(360/60)/60);
let secPosition = sec*(360/60);

HOURHAND.style.transform = "rotate("+ hrPosition + "deg)";
MINUTEHAND.style.transform = "rotate("+ minPosition + "deg)";
SECONDHAND.style.transform = "rotate("+ secPosition + "deg)";

}

var interval = setInterval(runTheClock, 1000);