//smoth scroll
$("nav a,.about a").click(function() {
    var aHref = $(this).attr("href");
    var d = $(aHref).offset().top;
    $("body ,html").animate({ scrollTop: d }, 1500)
})
$('.navbar-collapse a').click(function(e) {
    $('.navbar-collapse').collapse('toggle');
});


//wow animation
wow = new WOW({
    boxClass: 'wow', // default
    animateClass: 'animated', // default
    offset: 0, // default
    mobile: true, // default
    live: true // default
})
wow.init();

//sticky navbar
$(function() {
    $(document).scroll(function() {
        var $nav = $(".navbar");
        var $links = $(".nav-link");
        var $navToggler = $(".togg");
        $nav.toggleClass('scrolled', $(this).scrollTop() > 50);
        $links.toggleClass('colored', $(this).scrollTop() > 50);
    });
});