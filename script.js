//make reference to the icon and menu in the html
const myIcon = document.getElementsByClassName(".menu-toggle");
const myMenu = document.getElementsByClassName(".menu");
//add event listener
myIcon.addEventListener("click", function () {
  //toggle the menu-open css class to either show or hide the menu
  myMenu.classList.toggle("menu-open");
});
