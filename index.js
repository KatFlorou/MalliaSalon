// ------------------- Navbar ----------------------------

// In smaller screens hide the navbar links and show only brand name and menu icon
// Get the icon thw opens the menu
let iconMenu = document.getElementsByClassName("icon_menu")[0]
// Get the menu list
let navbarList = document.getElementsByClassName("navbar_list")[0]
// When user clicks on menu icon show menu list
iconMenu.addEventListener("click", () => {
  navbarList.classList.toggle("active")
})
// When the user clicks a link within the menu list, close the menu list
navbarList.addEventListener("click", () => {
  navbarList.classList.toggle("active")  
})

// Change cursor to pointer when touching menu icon
let menu = document.getElementsByClassName("icon_menu")[0]
menu.addEventListener("touchstart", () =>  {
  menu.style.cursor = "pointer";
})


// ------------------- Modal Careers ---------------------
// Get the modal
var modal = document.getElementById("careers_modal");
// Get the button that opens the modal
var btn = document.getElementById("jobs");
// Get the <span> element that closes the modal
var span = document.getElementById("close");
// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}