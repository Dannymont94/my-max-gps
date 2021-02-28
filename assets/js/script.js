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

// $(window).on("scroll", function() {
//   var currentPos = $(window).scrollTop();

//   $('nav li a').each(function() {
//     var sectionLink = $(this);
//     // capture the height of the navbar
//     var headerHeight = $('header').outerHeight() + 1;
//     var section = $(sectionLink.attr('href'));
    
//     console.log(section);
//     console.log('section position top: ' + section.position().top);
//     console.log('header height: ' + headerHeight);
//     console.log('current Pos: ' + currentPos);
//     console.log('sectionLink offset top: ' + sectionLink.offset().top);
//     console.log('section height: ' + section.height());
//     console.log(section.position().top - headerHeight);
//     console.log(currentPos && sectionLink.offset().top + section.height());
//     console.log(currentPos);
//     console.log((section.position().top - headerHeight <= currentPos && sectionLink.offset().top + section.height() > currentPos));
//     console.log('');


//     // subtract the navbar height from the top of the section
//     if(section.position().top - headerHeight <= currentPos && sectionLink.offset().top + section.height() > currentPos) {
//       $('nav li a').removeClass('active');
//       sectionLink.addClass('active');
//     } else {
//       sectionLink.removeClass('active');
//     }
//   });
// });