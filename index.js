document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    document.getElementById("footer").style.display = "flex";
  }, 5000);
  
  window.addEventListener("scroll", function() {
    document.getElementById("footer").style.opacity = "0";
  });

});