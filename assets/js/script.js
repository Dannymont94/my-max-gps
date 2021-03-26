const titleEl = document.querySelector('h1 a');
const hamburgerMenuEl = document.querySelectorAll('.menu-content ul li');
const hamburgerCheckboxEl = document.querySelector('.checkbox-trigger');

function closeHamburgerMenu() {
  if (hamburgerCheckboxEl.checked == true) {
    hamburgerCheckboxEl.checked = false;
  }
}

$(function() {
  // This will select everything with the class smoothScroll
  // This should prevent problems with carousel, scrollspy, etc...
  $('.smoothScroll').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000); // The number here represents the speed of the scroll in milliseconds
        return false;
      }
    }
  });
});

titleEl.addEventListener('click', closeHamburgerMenu);

hamburgerMenuEl.forEach(element => {
  element.addEventListener('click', closeHamburgerMenu);
});