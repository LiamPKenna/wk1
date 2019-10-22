$(function() {
  $(".main-shout").fadeIn(1000);
  $("#fade-text").slideDown(1500);
});

// inspired by https://html-online.com/articles/animated-scroll-anchorid-function-jquery/

$(function() {
  $( "a.scroll-link" ).click(function(e) {
    e.preventDefault();
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top
    }, 700);
  });
})
