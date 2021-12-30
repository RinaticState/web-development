// generate 2 sets of random numbers, one for dice 1, another for dice 2
var randomNumber1 = Math.floor((Math.random()*6)+1);
var randomNumber2 = Math.floor((Math.random()*6)+1);

// make strings to replace the image names with the random numbers so the dice could be randomly selected 
var randomiseName = "images/dice" + randomNumber1 + ".png";
var randomiseName2 = "images/dice" + randomNumber2 + ".png";

// js code replaces the html img elements each time you refresh the page. in this case, new dice images from our random number generation.
var getImg = document.getElementsByClassName('img1');
getImg[0].setAttribute('src', randomiseName);
var getImg2 = document.getElementsByClassName('img2');
getImg2[0].setAttribute('src', randomiseName2);

// time to see how wins based on the dice roll

// since the title is the first h1 element of this page, we could use querySelector instead of getElementsByClassName
var getHeader = document.querySelector("h1");

// using those random number variables from earlier, check which value is greater, and declare who wins.
if (randomNumber1 > randomNumber2) {
    getHeader.innerHTML = "Player 1 Wins !";
} else if (randomNumber1 < randomNumber2) {
    getHeader.innerHTML = "Player 2 Wins !";
} else {
    getHeader.innerHTML = "Draw !";
}