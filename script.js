$(document).ready(function() {
  $('#check').change(function() {
    if ($(this).is(":checked")) {
      $('#credit_card_section').show();
    } else {
      $('#credit_card_section').hide();
    }
  });

  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 2500, function() {
        window.location.hash = hash;
      });
    }
  });

  const slideButtons = document.querySelectorAll('.slide-button');
  const slideText = document.getElementById('slideText');

  slideButtons.forEach(button => {
    button.addEventListener('click', () => {
      slideText.classList.toggle('slide-in');
    });
  });
});
