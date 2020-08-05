let kitchenWhite = document.querySelector(".kitchen__images_white");
let kitchenBlack = document.querySelector(".kitchen__images_black");

let kitchenColorInputWhite = document.querySelector(".kitchen__color_input_white");
let kitchenColorInputBlack = document.querySelector(".kitchen__color_input_black");

let underlineT = kitchen.querySelector(".underline__t");
let underlineStick = kitchen.querySelector(".underline__stick");
let underlineLine = kitchen.querySelector(".underline__line");
let sectionTitle = kitchen.querySelector(".section__title");
let underlineLogo = kitchen.querySelector(".underline__logo");
let underlineLink = kitchen.querySelectorAll(".underline__link");
let kitchenPlate = kitchen.querySelector(".kitchen__plate");
let cutawayOrder = kitchen.querySelector(".cutaway__order");
let kitchenDescription = kitchen.querySelectorAll(".kitchen__description");
let kitchenPhoto = kitchen.querySelectorAll(".kitchen__photo");//здесь нужно для каждой картинки отдельно

function kitchenWhiteNone(){
  kitchen.classList.remove('kitchen_color_white');
  kitchen.classList.add('kitchen_color_black');

  kitchenWhite.classList.remove('display-grid');
  kitchenWhite.classList.add('display-none');

  kitchenBlack.classList.add('display-grid');
  kitchenBlack.classList.remove('display-none');

  kitchenColorInputWhite.classList.remove('kitchen__active');
  kitchenColorInputBlack.classList.add('kitchen__active');
  kitchenColorInputWhite.classList.remove('kitchen__color_color_black');
  kitchenColorInputBlack.classList.remove('kitchen__color_color_black');

  underlineT.classList.remove('underline__t_color_black');
  underlineStick.classList.remove('underline__stick_color_black');
  underlineLine.classList.remove('underline__line_color_black');
  sectionTitle.classList.remove('section__title_color_black');
  underlineLogo.classList.remove('underline__logo_color_black');
  for (let i = 0; i < underlineLink.length; i++) {
  underlineLink[i].style.color = "white";}
  kitchenPlate.style.color = "white";
  cutawayOrder.style.color = "white";
  for (let i = 0; i < kitchenDescription.length; i++) {
    kitchenDescription[i].style.color = "white";}
  for (let i = 0; i < kitchenPhoto.length; i++) {//здесь тоже
    kitchenPhoto[i].style.backgroundImage = "url(../../../../images/kitchen__image_five.jpg)";}
}

function kitchenBlackNone(){
  kitchen.classList.add('kitchen_color_white');
  kitchen.classList.remove('kitchen_color_black');

  kitchenBlack.classList.remove('display-grid');
  kitchenBlack.classList.add('display-none');

  kitchenWhite.classList.add('display-grid');
  kitchenWhite.classList.remove('display-none');

  kitchenColorInputWhite.classList.add('kitchen__active');
  kitchenColorInputBlack.classList.remove('kitchen__active');
  kitchenColorInputWhite.classList.add('kitchen__color_color_black');
  kitchenColorInputBlack.classList.add('kitchen__color_color_black');

  underlineT.classList.add('underline__t_color_black');
  underlineStick.classList.add('underline__stick_color_black');
  underlineLine.classList.add('underline__line_color_black');
  sectionTitle.classList.add('section__title_color_black');
  underlineLogo.classList.add('underline__logo_color_black');
  for (let i = 0; i < underlineLink.length; i++)
  underlineLink[i].style.color = "black";
  kitchenPlate.style.color = "black";
  cutawayOrder.style.color = "black";
  for (let i = 0; i < kitchenDescription.length; i++) {
    kitchenDescription[i].style.color = "black";}
    for (let i = 0; i < kitchenPhoto.length; i++) {//здесь тоже
      kitchenPhoto[i].style.backgroundImage = "url(../../../../images/kitchen__image_white_one.png)";}
}