document.getElementById('x-button').addEventListener('click', function() {
  document.body.classList.add('fadeOut');
  setTimeout(function () {
    window.location.href = '../index.html';
  }, 500);
});

document.getElementById('forma-link').addEventListener('click', function(e) {
  e.preventDefault();
  document.body.classList.add('fadeOut');
  setTimeout(function () {
    window.location.href = '../forma/forma.html';
  }, 500);
});

