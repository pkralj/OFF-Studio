document.addEventListener('DOMContentLoaded', function() {
  const overlay = document.querySelector('.empty-div');
  const logoVideo = document.getElementById('logo-video');

  logoVideo.addEventListener('loadeddata', function() {
    setTimeout(() => {
      overlay.classList.add('fadeOut');
      setTimeout(() => {
        overlay.style.zIndex = '-4';
      }, 500);
    },0 );
  });
  
});


document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    document.getElementById("footer").style.display = "flex";
  }, 3000);
  
  setTimeout(function() {
    window.addEventListener("scroll", function() {
      document.getElementById("footer").style.opacity = "0";
    });
  }, 2000);
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

document.getElementById('nav-contact').addEventListener('click', function(e) {
  e.preventDefault();
  document.body.classList.add('fadeOut');
  setTimeout(function () {
    window.location.href = 'contact/contact.html';
  }, 500);
});