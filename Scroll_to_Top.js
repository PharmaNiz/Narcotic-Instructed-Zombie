
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 50px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}