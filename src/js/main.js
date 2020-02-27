"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below


const glasses = document.querySelector(".count--js");
const added = document.querySelector(".button--js");
const del = document.querySelector(".button__delete--js");
const day = new Date().toISOString().slice(0, 10);
let addedGlass = 0;

added.addEventListener('click', (e) => {
  if (addedGlass === 100) {
    alert('Osiągnales limit szklanek');
  }
  else {
    addedGlass += 1;
    glasses.innerHTML = `${addedGlass}`;
    localStorage.setItem(day, addedGlass);
  }


});

del.addEventListener('click', (e) => {
  if (addedGlass >>> 0) {
    addedGlass -= 1;
    glasses.innerHTML = `${addedGlass}`;
    localStorage.setItem(day, addedGlass);
  }
  else {
    alert("nie mozna odjąc szklanki");
  }


})
