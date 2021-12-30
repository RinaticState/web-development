var randomNumber1 = Math.floor((Math.random()*6)+1);
var randomNumber2 = Math.floor((Math.random()*6)+1);
var randomiseName = "images/dice" + randomNumber1 + ".png";
var randomiseName2 = "images/dice" + randomNumber2 + ".png";
var getImg = document.getElementsByClassName('img1');
getImg[0].setAttribute('src', randomiseName);
var getImg2 = document.getElementsByClassName('img2');
getImg2[0].setAttribute('src', randomiseName2);
