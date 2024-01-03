// Make reference to the icon and menu in the HTML
const myIcon = document.querySelector(".menu-toggle");
const myMenu = document.querySelector(".menu");
const button = document.querySelector(".btn");
  const myName = document.getElementById("name")
  const email = document.getElementById("email")
  const message = document.getElementById("message")

// Add event listener
myIcon.addEventListener("click", function () {
  // Toggle the menu-open CSS class to either show or hide the menu
  if (myMenu.style.display === "none") {
    myMenu.style.display = "block";
    myIcon.style.display = "none";
  } else {
    myMenu.style.display = "none";
  }
});

//for contact page
button.addEventListener("click", function () {
  if (myName == "" || email == "" || message == "") {
    alert("Please check and complete all required filds.")
    return false;
  } else {
    return true;
  }
});




// function onclick() {
//   const name = document.getElementById("name").value;
//   const email = document.getElementById("email").value;
//   const message = document.getElementById("message").value;
//   if (name == "" || email == "" || message == "") {
//     // document.getElementById("error-message").innerHTML =
//     //   "Please fill out all filds.";
//     // return false;
//       alert("Please check and complete all required filds.");
//     } else if (email == "@gmail.com") {
//       alert("Please use the correct email format");
//     return false;
//   } else {
//     return true;
//   }

