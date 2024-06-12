document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    document.getElementById("footer").style.display = "flex";
  }, 2000);
  
  window.addEventListener("scroll", function() {
    document.getElementById("footer").style.opacity = "0";
  });
});

const videos = document.querySelectorAll('.video-content');

function toggleBorder () {
  if(document.fullscreenElement) {
    videos.forEach(video => video.classList.add('no-border'));
  } else {
    videos.forEach(video => video.classList.remove('no-border'));
  }
}



document.addEventListener('fullscreenchange', toggleBorder);
document.addEventListener('webkitfullscreenchange', toggleBorder);
document.addEventListener('mozfullscreenchange', toggleBorder);
document.addEventListener('msfullscreenchange', toggleBorder);