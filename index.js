document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    document.getElementById("footer").style.display = "flex";
  }, 2000);
  
  window.addEventListener("scroll", function() {
    document.getElementById("footer").style.opacity = "0";
  });

});