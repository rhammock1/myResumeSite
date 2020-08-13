const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");
const HEADOPEN = document.querySelector("#head_open");

var date = new Date();
console.log(date);
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
console.log("Hour: " + hr + " Minute: " + min + " Second: " + sec);

let hrPosition = (hr*360/12)+(min*(360/60)/12);
let minPosition = (min*360/60)+(sec*(360/60)/60);
let secPosition = sec*(360/60);
console.log(hrPosition + " deg " + minPosition + " deg " + secPosition + " deg");

function runTheClock() {
    
    hrPosition = hrPosition +(3/36);
    minPosition = minPosition +(6/60);
    secPosition = secPosition +6;

    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

var interval = setInterval(runTheClock, 1000);

function greeting() {
    if (hr < 12) {
        HEADOPEN.innerHTML = "Good morning, my name is<br/> Robert Hammock";
    } else if (hr < 18) {
            HEADOPEN.innerHTML = "Good afternoon, my name is<br/> Robert Hammock";
    } else if (hr < 24) {
            HEADOPEN.innerHTML = "Good evening, my name is<br/> Robert Hammock";
    } else {
        console.log("error with time of day")
    }
}

greeting();