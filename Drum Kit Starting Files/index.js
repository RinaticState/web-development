var getButtons = document.querySelectorAll(".drum")
var audio = new Audio("sounds/tom-1.mp3");
for (var i = 0; i < 7; i++) {
  getButtons[i].addEventListener("click", function() {
    audio.play();
});
}
