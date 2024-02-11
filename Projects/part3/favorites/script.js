const showHideNav = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");
};

document.getElementById("hamburger").onclick = showHideNav;

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

function selectOption(option) {
    var dropdown = document.getElementById("myDropdown");
    var button = document.querySelector(".dropbtn");
    button.textContent = option;
    dropdown.classList.remove("show");
}
  
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
}