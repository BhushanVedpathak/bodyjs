// body-color
$(document).ready(function () {
    $("#1").click(function () {
        $("body").css("background-color", "yellow");
    });
    $("#2").click(function () {
        $("body").css("background-color", "red");
    });
    $("#3").click(function () {
        $("body").css("background-color", "blue");
    });
    $("#4").click(function () {
        $("body").css("background-color", "green");
    });
});
// body-color-end

// stickyMenu
function stickyMenu() {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 60) {
            $(".bs-header").addClass("sticky");
        } else {
            $(".bs-header").removeClass("sticky");
        }
    });
}
$(function () {
    stickyMenu();
});
// sticky-menubar-end

// smooth-scroll
$(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      }
    });
  });
  // smooth-scroll-end