const currentYear = new Date().getFullYear();
const blackFriday = new Date(`26 November ${currentYear} 23:59:59 GMT-0300`);
const daysContainer = document.querySelectorAll('[data-days]')
const hoursContainer = document.querySelectorAll('[data-hours]')
const minutesContainer = document.querySelectorAll('[data-minutes]')
const secondsContainer = document.querySelectorAll('[data-seconds]')
const loading = document.querySelector('.loading');
const timerWrapper = document.querySelector('.timer-wrapper');

function formatDate(unit){
  return unit > 9 ? unit : '0' + unit;
}

function updateTimer({days, hours, minutes, seconds}){
  Array.from(daysContainer,(c) => {
    c.textContent = days;
  })
  Array.from(hoursContainer,(c) => {
    c.textContent = formatDate(hours);
  })
  Array.from(minutesContainer,(c) => {
    c.textContent = formatDate(minutes);
  })
  Array.from(secondsContainer,(c) => {
    c.textContent = formatDate(seconds);
  })
}

function updateCountdown() {
  const currentTime = new  Date();
  const difference = blackFriday - currentTime;

  const days = Math.floor(difference / 1000 / 60 / 60 / 24);
  const hours = Math.floor(difference / 1000 / 60 / 60) % 24;
  const minutes = Math.floor(difference / 1000 / 60 ) % 60;
  const seconds = Math.floor(difference / 1000) % 60;

  updateTimer({days, hours, minutes, seconds})
}

function startCountdown(){
  loading.remove();
  timerWrapper.style.display = 'flex';
}

setTimeout(startCountdown,1000);

setInterval(updateCountdown, 1000);