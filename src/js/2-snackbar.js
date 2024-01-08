'use strict';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

function promiseGenerator(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === "fulfilled") {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
};

const form = document.querySelector(".form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const delay = parseInt(this.elements.delay.value, 10);
    const state = document.querySelector('input[name="state"]:checked')?.value;

    promiseGenerator(delay, state)
        .then((result) => {
        iziToast.success({
        messageColor: "#FFF", 
        position: "topRight",
        backgroundColor: "#59A10D",
        message: `✅ Fulfilled promise in ${result}ms`
      });
    })
        .catch((error) => {
        iziToast.error({
        messageColor: "#FFF",  
        position: "topRight",
        backgroundColor: "#EF4040",
        message: `❌ Rejected promise in ${error}ms`
      });
    });
});