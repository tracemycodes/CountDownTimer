const UIday = document.querySelectorAll(".count-day");
const UIhour = document.querySelectorAll(".count-hours");
const UImin = document.querySelectorAll(".count-min");
const UIsec = document.querySelectorAll(".count-sec");

// const countTimeObj = {
//   days: 43,
//   hours: 18,
//   minutes: 23,
//   seconds: 59,
// };

// var editedDeadline = setDeadline({
//   days: Number(formData.get("day")),
//   hours: Number(formData.get("hour")),
//   minutes: Number(formData.get("minute")),
//   seconds: Number(formData.get("second")) + 2,
// });

// const countTimeObj = CountTime({
//   days: 43,
//   hours: 18,
//   minutes: 23,
//   seconds: 59,
// })

// function CountTime (countTimeObj) {
//   console.log(countTimeObj);
// };

// const CountTime = (countTimeObj) => {
//   console.log(countTimeObj);
// }

const countTimeObj = CountTime({
  days: Number(43),
  hours: Number(18),
  minutes: Number(23),
  seconds: Number(52),
});

function CountTime(time) {
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

function calculateCount() {
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

let huy = calculateCount();
console.log(huy);

// setInterval(displayCount, 1000)

function displayCount() {
  const UIday = document.querySelectorAll(".count-day");
  const UIhour = document.querySelectorAll(".count-hours");
  const UImin = document.querySelectorAll(".count-min");
  const UIsec = document.querySelectorAll(".count-sec");

  let timeObj = calculateCount();

  console.log(timeObj);

  UIday.forEach((dayNum) => (dayNum.textContent = timeObj.days));
  UIhour.forEach((hourNum) => (hourNum.textContent = timeObj.hours));
  UImin.forEach(minNum => minNum.textContent = timeObj.minutes);
  UIsec.forEach(secNum => secNum.textContent = timeObj.seconds)
  calculateCount()
}

displayCount();

setInterval(dothis, 2000)

function dothis () {
  calculateCount()
  displayCount()
}
// const deadlineDate = new Date(countTimeObj);
// console.log(countTimeObj.getTime());
// console.log(deadlineDate);
