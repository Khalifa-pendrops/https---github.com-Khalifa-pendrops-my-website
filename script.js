// Make reference to the icon and menu in the HTML
const myIcon = document.querySelector(".menu-toggle");
const myMenu = document.querySelector("nav");

// Add event listener
myIcon.addEventListener("click", function () {
  // Toggle the menu-open CSS class to either show or hide the menu
  if (myMenu.style.display === "none") {
    myMenu.style.display = "block";
  } else {
    myMenu.style.display = "none";
  }
});
