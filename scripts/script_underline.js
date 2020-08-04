/*let underline = document.querySelector(".underline");
let underlineHover = document.querySelector(".underline__hover");*/

let cutaway = document.querySelector(".cutaway");
let concept = document.querySelector(".concept");
let philosophy = document.querySelector(".philosophy");

let care = document.querySelector(".care");
let booking = document.querySelector(".booking");
let instagram = document.querySelector(".instagram");


function displayUnderlineNone() {/*1*/
  underline.classList.remove('display-grid');
  underline.classList.add('display-none');
  underlineHover.classList.remove('display-none');
  underlineHover.classList.add('display-grid');
}
function displayUnderlineHoverNone(){/*2*/
  underline.classList.add('display-grid');
  underline.classList.remove('display-none');
  underlineHover.classList.add('display-none');
  underlineHover.classList.remove('display-grid');
}


function cutawayUnderlineNone() {/*1*/
  let underline = cutaway.querySelector(".underline");
  let underlineHover = cutaway.querySelector(".underline__hover");

  underline.classList.remove('display-grid');
  underline.classList.add('display-none');
  underlineHover.classList.remove('display-none');
  underlineHover.classList.add('display-grid');
}
function cutawayUnderlineGrid() {/*2*/
  let underline = cutaway.querySelector(".underline");
  let underlineHover = cutaway.querySelector(".underline__hover");

  underline.classList.add('display-grid');
  underline.classList.remove('display-none');
  underlineHover.classList.add('display-none');
  underlineHover.classList.remove('display-grid');
}

function conceptUnderlineNone() {/*1*/
  let underline = concept.querySelector(".underline");
  let underlineHover = concept.querySelector(".underline__hover");

  underline.classList.remove('display-grid');
  underline.classList.add('display-none');
  underlineHover.classList.remove('display-none');
  underlineHover.classList.add('display-grid');
}
function conceptUnderlineGrid() {/*2*/
  let underline = concept.querySelector(".underline");
  let underlineHover = concept.querySelector(".underline__hover");

  underline.classList.add('display-grid');
  underline.classList.remove('display-none');
  underlineHover.classList.add('display-none');
  underlineHover.classList.remove('display-grid');
}

function philosophyUnderlineNone() {/*1*/
  let underline = philosophy.querySelector(".underline");
  let underlineHover = philosophy.querySelector(".underline__hover");

  underline.classList.remove('display-grid');
  underline.classList.add('display-none');
  underlineHover.classList.remove('display-none');
  underlineHover.classList.add('display-grid');
}
function philosophyUnderlineGrid() {/*2*/
  let underline = philosophy.querySelector(".underline");
  let underlineHover = philosophy.querySelector(".underline__hover");

  underline.classList.add('display-grid');
  underline.classList.remove('display-none');
  underlineHover.classList.add('display-none');
  underlineHover.classList.remove('display-grid');
}










function careUnderlineNone() {/*1*/
  let underline = care.querySelector(".underline");
  let underlineHover = care.querySelector(".underline__hover");

  underline.classList.remove('display-grid');
  underline.classList.add('display-none');
  underlineHover.classList.remove('display-none');
  underlineHover.classList.add('display-grid');
}
function careUnderlineGrid() {/*2*/
  let underline = care.querySelector(".underline");
  let underlineHover = care.querySelector(".underline__hover");

  underline.classList.add('display-grid');
  underline.classList.remove('display-none');
  underlineHover.classList.add('display-none');
  underlineHover.classList.remove('display-grid');
}

function bookingUnderlineNone() {/*1*/
  let underline = booking.querySelector(".underline");
  let underlineHover = booking.querySelector(".underline__hover");

  underline.classList.remove('display-grid');
  underline.classList.add('display-none');
  underlineHover.classList.remove('display-none');
  underlineHover.classList.add('display-grid');
}
function bookingUnderlineGrid() {/*2*/
  let underline = booking.querySelector(".underline");
  let underlineHover = booking.querySelector(".underline__hover");

  underline.classList.add('display-grid');
  underline.classList.remove('display-none');
  underlineHover.classList.add('display-none');
  underlineHover.classList.remove('display-grid');
}

function instagramUnderlineNone() {/*1*/
  let underline = instagram.querySelector(".underline");
  let underlineHover = instagram.querySelector(".underline__hover");

  underline.classList.remove('display-grid');
  underline.classList.add('display-none');
  underlineHover.classList.remove('display-none');
  underlineHover.classList.add('display-grid');
}
function instagramUnderlineGrid() {/*2*/
  let underline = instagram.querySelector(".underline");
  let underlineHover = instagram.querySelector(".underline__hover");

  underline.classList.add('display-grid');
  underline.classList.remove('display-none');
  underlineHover.classList.add('display-none');
  underlineHover.classList.remove('display-grid');
}