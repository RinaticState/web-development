getButtons = document.querySelectorAll(".drum")
for (let i = 0; i < 7; i++) {
  getButtons[i].addEventListener("click", function() {
      alert("I got clicked !");})
}