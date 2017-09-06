$(document).ready(function () {
    $('#menu').click(function () {
        $('#animation').slideToggle(function () {
            $('#animation').stop().remove();
        },function () {
            $('#animation').stop().add();
        })
    });
    /*$('#menu').click(function () {
        $('body').addClass('shade');
        $('#animation').show();
    });*/
   $('#close').click(function () {
       ('body').removeClass('shade');
       $('#animation').remove();
   });

    $('.bicycle .classify span').click(function () {
        $(this).addClass('on').siblings().removeClass('on');
    });

    $('#myCarousel').carousel({interval:3000});
    $('#myAuao').carousel({interval:3000});
});