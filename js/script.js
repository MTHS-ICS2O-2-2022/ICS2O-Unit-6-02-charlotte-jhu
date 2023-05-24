// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Charlotte Jhu
// Created on: March 2023
// This file contains the JS functions for index.html

function myButtonClicked() {
  // this is a cookie clicker game
  // process
if ( localStorage.clicks ) {
  localStorage.clicks = Number(localStorage.clicks) + 1
} else {
  localStorage.clicks = 1
}

// output
document.getElementById('clicks').innerHTML = "You have " + localStorage.clicks + " cookies!"
}
