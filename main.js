$(document).ready(function(){
    $(window).scroll(function(){  
        if ($(this).scrollTop() > 40) {
            $('header').addClass("sticky");
        }else{
            $('header').removeClass("sticky");
        }   
    });
});