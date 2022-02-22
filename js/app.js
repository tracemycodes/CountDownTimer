const UIday = document.querySelectorAll(".count-day");
const UIhour = document.querySelectorAll(".count-hours");
const UImin = document.querySelectorAll(".count-min");
const UIsec = document.querySelectorAll(".count-sec");


const countTime = (time) => {
  let days = time.days,
    hours = time.hours,
    minutes = time.minutes,
    seconds = time.seconds;

  const currentTime = new Date(
    new Date().getTime() +
      days * 86400000 +
      hours * 3600000 +
      minutes * 60000 +
      seconds * 1000
  ).toISOString();

  return currentTime;
}

const countTimeObj = countTime({
  days: Number(49),
  hours: Number(13),
  minutes: Number(28),
  seconds: Number(15) + 2,
});

console.log(Date.parse(countTimeObj));
console.log(typeof countTimeObj);
console.log(countTimeObj);

const calculateCount = () => {
  const countDate = Date.parse(countTimeObj) - new Date().getTime(),
    days = Math.floor(countDate / (1000 * 60 * 60 * 24));
  (hours = Math.floor((countDate / (1000 * 60 * 60)) % 24)),
    (minutes = Math.floor((countDate / 1000 / 60) % 60)),
    (seconds = Math.floor((countDate / 1000) % 60));

  return {
    countDate: countDate,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

const displayCount = () => {
  let animateDay = document.getElementById("animate-day");
  let animateHour = document.getElementById("animate-hour");
  let animateMin = document.getElementById("animate-min");
  let animateSec = document.getElementById("animate-sec");
  let timeObj = calculateCount();

  UIday.forEach((dayNum) => {
    let displayDay;
    if (timeObj.days < 10) {
      displayDay = "0" + String(timeObj.days);
    } else {
      displayDay = String(timeObj.days);
    }
    animate(dayNum.textContent, displayDay, animateDay);
    dayNum.textContent = displayDay;
  });


  UIhour.forEach((hourNum) => {
    let displayHour;
    if (timeObj.hours < 10) {
      displayHour = "0" + String(timeObj.hours);
    } else {
      displayHour = String(timeObj.hours);
    }
    animate(hourNum.textContent, displayHour, animateHour);
    hourNum.textContent = displayHour;
  });


  UImin.forEach((minNum) => {
    let displayMin;
    if (timeObj.minutes < 10) {
      displayMin = "0" + String(timeObj.minutes);
    } else {
      displayMin = String(timeObj.minutes);
    }
    animate(minNum.textContent, displayMin, animateMin);
    minNum.textContent = displayMin;
  });


  UIsec.forEach((secNum) => {
    let displaySec;
    if (timeObj.seconds < 10) {
      displaySec = "0" + String(timeObj.seconds);
      // animate()
    } else {
      displaySec = String(timeObj.seconds);
    }
    animate(secNum.textContent, displaySec, animateSec);
    secNum.textContent = displaySec;
  });
}

const animate = (number, time, elem) => {
  if (number != time) {
    setTimeout((stopAnimation) => {
      elem.classList.add("animate-flip");
    }, 100);
  }
  elem.classList.remove("animate-flip");
}

setInterval(dothis, 1000);

function dothis() {
  calculateCount();
  displayCount();
}
