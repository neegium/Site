$(document).ready(function() { 
    var eT = 0;
    $('.everything').css('opacity',0).each(function() {
        $(this).delay(eT).css('opacity',0).animate({opacity:1}, 900);
        eT += 400;
    });
    $('.everything').click(function() {
        $('.everything').stop(true, true).fadeIn();
    });

    var P=0;
    $('.pessoas').css('opacity',0).each(function() {
        $(this).delay(P).css('opacity',0).animate({opacity:1}, 600);
        P += 400;
    });
    $('.pessoas').click(function() {
        $('.pessoas').stop(true, true).fadeIn();
    });
 });