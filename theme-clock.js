const modeButton =document.querySelector('.toggle');
const body = document.querySelector('body');
const hoursNeedle = document.querySelector('.hours')
const minutesNeedle = document.querySelector('.minutes')
const secondsNeedle = document.querySelector('.seconds')
const dateEle = document.querySelector('.date');
const timeEle = document.querySelector('.time');
const dateCircle = document.querySelector('.circle')


const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
// Mode
modeButton.addEventListener('click', () => changeMode())

function changeMode() {
    // checking the current mode
    // if the current mode is light then add dark class to the body
    if (!body.classList.contains('dark')) {
        body.classList.add('dark');
    }
    else  {
        body.classList.toggle('dark');
    }
}


// CLOCK & TIME

const time = new Date()
const month = time.getMonth();
const day = time.getDay();
const hrs = time.getHours();
const hours = hrs >= 13 ? hrs % 12 : hrs;
const minutes = time.getMinutes();
const seconds = time.getSeconds();
const date = time.getDate()
const AMPM = hrs > 12 ? 'PM' : 'AM';
// setting the angle the each arm should rotate
let secPosition = seconds * 360 / 60;
let minPosition = (minutes + seconds / 60) * 360 / 60;
let hrPosition = (hours + (minutes / 60) + (seconds / 3600)) * 360 / 12
function runClock()  {
    hrPosition = hrPosition + (1 / 120);
    minPosition = minPosition+ (1/10);
    secPosition = secPosition + 6;

    hoursNeedle.style.transform = `rotate(${hrPosition}deg)`
    minutesNeedle.style.transform = `rotate(${minPosition}deg)`
    secondsNeedle.style.transform = `rotate(${secPosition}deg)`
}

timeEle.innerHTML = `0${hours}:${minutes} ${AMPM}`;
dateEle.innerHTML =`${days[day]}, ${months[month]} <span class="circle">${date}</span>`

let interval = setInterval(runClock, 1000);

