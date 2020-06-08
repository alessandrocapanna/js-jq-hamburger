// per mostrare menu
$('.header-right > a ').click(
  function() {
    $('.hamburger-menu').show(100);
  }
);

// per chiudere menu 
$('.close').click(
  function() {
    $('.hamburger-menu').hide(100);
  }
);
