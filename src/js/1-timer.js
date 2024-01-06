'use strict';

import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

let userSelectedDate;
let startButton = document.querySelector('[data-start]');
let timerInterval;

let daysElement = document.querySelector('[data-days]');
let hoursElement = document.querySelector('[data-hours]');
let minutesElement = document.querySelector('[data-minutes]');
let secondsElement = document.querySelector('[data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
    console.log(selectedDates[0]);

    const selectedDate = selectedDates[0];
    if (selectedDate < new Date()) {
      iziToast.error({
        message: 'Please choose a date in the future',
      });
      startButton.disabled = true; 
    } else {
      userSelectedDate = selectedDate;
      startButton.disabled = false; 
    }
  },
};

flatpickr("#datetime-picker", options);

startButton.addEventListener('click', startTimer);

document.addEventListener('DOMContentLoaded', function () {
  startButton.disabled = true;
});

function startTimer() {
  startButton.disabled = true;

  timerInterval = setInterval(() => {
    const currentTime = new Date();
    const timeRemaining = userSelectedDate - currentTime;

    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      updateTimer(0);
      startButton.disabled = false; 
      document.getElementById('datetime-picker').removeAttribute("disabled"); 
    } else {
      updateTimer(timeRemaining);
    }
  }, 1000);
};

function updateTimer(timeDifference) {
  const timeRemaining = convertMs(timeDifference);

  daysElement.textContent = addLeadingZero(timeRemaining.days);
  hoursElement.textContent = addLeadingZero(timeRemaining.hours);
  minutesElement.textContent = addLeadingZero(timeRemaining.minutes);
  secondsElement.textContent = addLeadingZero(timeRemaining.seconds);
};

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
};