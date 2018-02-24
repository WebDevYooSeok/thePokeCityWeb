// When the user scrolls the page, execute myFunction
window.onscroll = function() {stickyFunc()};

// Get the navbar
var navbar = document.getElementById("navbar");
var menu = $('.main');
//var navHamburgerContainter= $('#site-nav-hamberger-open');
var navHamburgerContent= $('.site-nav-open');
// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyFunc() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    menu.addClass('addTopMargin');
    navHamburgerContent.addClass('addTopPosition');

  } else {
    navbar.classList.remove("sticky");
    menu.removeClass('addTopMargin');
    navHamburgerContent.removeClass('addTopPosition');
  }
}

$('.menu-toggle').click(function() {

  $('.site-nav').toggleClass('site-nav--open', 500);
  $(this).toggleClass('open');
  $('.site-nav-open').toggleClass('site-nav-show', 100);
  

})
