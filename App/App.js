/* 
    Author: ONANA vital 
    Type of file: Javascript file
*/

/* Globals variables */
var App = document.querySelector("body");
var App_body = document.querySelectorAll("#app");
var loadings = document.querySelectorAll(".load");
var choice_Card_one = document.querySelectorAll("option1");
var choice_Card_two = document.querySelectorAll("option2");

/* Loading web application */
var loader = document.getElementById('loader'),
    load = document.getElementById('loading'),
    myTime,
    newTime = 0;

function loading() {
    'use strict';
    newTime = newTime + 1;
    if (newTime > 100) {
        newTime = 0;
    } else {
         loader.textContent = newTime + "%";
    }
}
myTime = setInterval(loading, 14);
 
setTimeout(() => {
    document.querySelector('.load').style.display = "none"
}, 2000);

/* Form input verification */