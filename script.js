// Show "Back to Top" button on scroll
$(window).scroll(function () {
  if ($(this).scrollTop() > 200) {
    $('#back-to-top').fadeIn();
  } else {
    $('#back-to-top').fadeOut();
  }
});

// Smooth scroll to top
$('#back-to-top').click(function () {
  $('html, body').animate({ scrollTop: 0 }, 600);
  return false;
});

// Fade in sections on scroll
$(window).on('scroll', function () {
  $('.fade-section').each(function () {
    const topOfElement = $(this).offset().top;
    const bottomOfWindow = $(window).scrollTop() + $(window).height();

    if (bottomOfWindow > topOfElement + 100) {
      $(this).addClass('visible');
    }
  });
});
