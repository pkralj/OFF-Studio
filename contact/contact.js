document.getElementById('x-button').addEventListener('click', function() {
    document.body.classList.add('fadeOut');
    setTimeout(function () {
      window.location.href = '../index.html';
    }, 500);
  });