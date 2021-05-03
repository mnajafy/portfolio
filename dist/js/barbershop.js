$(document).ready(function() {
    // init AOS
    AOS.init();
    
    // top to
    $("#back-top").hide();

    // fade in #back-top
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#back-top').fadeIn();
        } else {
            $('#back-top').fadeOut();
        }
    });

    // Ajouter un défilement fluide à tous les liens 
    $('a').on('click', function(event) {
        if (this.hash !== '') {
            console.log(event);
            event.preventDefault();
            console.log(event);
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });
});