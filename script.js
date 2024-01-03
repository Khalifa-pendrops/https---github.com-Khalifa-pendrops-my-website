// // Make reference to the icon and menu in the HTML
// const myIcon = document.querySelector(".menu-toggle");
// const myMenu = document.querySelector("nav");

// // Add event listener
// myIcon.addEventListener("click", function () {
//   // Toggle the menu-open CSS class to either show or hide the menu
//   if (myMenu.style.display === "none") {
//     myMenu.style.display = "block";
//   } else {
//     myMenu.style.display = "none";
//   }
// });

//for contact page
function onclick() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  if (name == "" || email == "" || message == "") {
    document.getElementById("error-message").innerHTML =
      "Please fill out all filds.";
    return false;
    //   alert("Please check and complete all required filds.");
    // } else if (email == "@gmail.com") {
    //   alert("Please use the correct email format");
    return false;
  } else {
    return true;
  }
}
