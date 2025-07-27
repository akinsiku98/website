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

// Show/Hide Modals
$('.view-more').click(function () {
  const target = $(this).closest('.project-card').data('target');
  $('#' + target).fadeIn();
});

$('.close').click(function () {
  $(this).closest('.modal').fadeOut();
});

$(window).click(function (e) {
  if ($(e.target).hasClass('modal')) {
    $(e.target).fadeOut();
  }
});

// Typewriter text
const text = "Kehinde Akinsiku";
let i = 0;
function typeWriter() {
  if (i < text.length) {
    $('#typewriter').append(text.charAt(i));
    i++;
    setTimeout(typeWriter, 100);
  }
}
$(document).ready(() => {
  typeWriter();

  // Dark mode toggle
  $('#dark-mode-toggle').click(() => {
    const theme = $('html').attr('data-theme') === 'dark' ? 'light' : 'dark';
    $('html').attr('data-theme', theme);
  });
});

// Existing code: back-to-top, fade, modals… no change
