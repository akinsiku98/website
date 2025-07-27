// Wrap DOM‑ready code here
$(document).ready(function() {
  // 1) Fade‑in header
  $('.fade-header').addClass('visible');

  // 2) Dark mode toggle
  $('#dark-mode-toggle').click(function() {
    const theme = $('html').attr('data-theme') === 'dark' ? 'light' : 'dark';
    $('html').attr('data-theme', theme);
  });

  // 3) Smooth scroll to top (back‑to‑top click)
  $('#back-to-top').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 600);
    return false;
  });

  // 4) Show/Hide project detail modals
  $('.view-more').click(function() {
    const target = $(this).closest('.project-card').data('target');
    $('#' + target).fadeIn();
  });
  $('.close').click(function() {
    $(this).closest('.modal').fadeOut();
  });
  // Click outside modal to close
  $(window).click(function(e) {
    if ($(e.target).hasClass('modal')) {
      $(e.target).fadeOut();
    }
  });
});

// Runs on scroll, for back‑to‑top button & fade‑in sections
$(window).on('scroll', function() {
  // Show or hide the back‑to‑top button
  if ($(this).scrollTop() > 200) {
    $('#back-to-top').fadeIn();
  } else {
    $('#back-to-top').fadeOut();
  }

  // Fade sections into view
  $('.fade-section').each(function() {
    const topOfElement   = $(this).offset().top;
    const bottomOfWindow = $(window).scrollTop() + $(window).height();
    if (bottomOfWindow > topOfElement + 100) {
      $(this).addClass('visible');
    }
  });
});
