$(function() {
    $('.scrollTo').click(function() {
        var sectionTo = $(this).attr('href');
        $('html, body').animate({
        scrollTop: $(sectionTo).offset().top - 80
        }, 1250, "easeInOutExpo");
    });
});