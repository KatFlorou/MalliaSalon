document.addEventListener('DOMContentLoaded', () => {

  // ------------------- Navbar ----------------------------
  // In smaller screens hide the navbar links and show only brand name and menu icon
  // Get the icon that opens the menu
  const iconMenu = document.querySelector(".icon_menu")
  // Get the dropdown menu
  const smallScreenMenu = document.querySelector(".smallScreenMenu")
  // Get the menu list
  const navbarList = document.querySelector(".navbar_list")
  
  iconMenu.addEventListener("click", () => {
    //Copy menu list to new dropdown menu
    smallScreenMenu.innerHTML = navbarList.innerHTML 
    // When user clicks on menu icon show menu list
    smallScreenMenu.classList.toggle("active")
  })
  
  // When the user clicks a link within the menu list, close the menu list
  smallScreenMenu.addEventListener("click", () => {
    smallScreenMenu.classList.toggle("active")  
  })


  // ------------------- Modal Careers ---------------------
  // Get the modal
  const modal = document.getElementById("careers_modal");
  // Get the button that opens the modal
  const btn = document.getElementById("jobs");
  // Get the <span> element that closes the modal
  const span = document.getElementById("close");
  // When the user clicks on the button, open the modal
  btn.onclick = () => {
    modal.style.display = "block";
  }
  // When the user clicks on <span> (x), close the modal
  span.onclick = () => {
    modal.style.display = "none";
  }
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }

})

