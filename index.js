'use strict'

$(function(){
    $('.btn-gnavi').on('click', function(){
        var rightVal = 0;
        if($(this).hasClass('open')) {
            rightVal = -300;
            $(this).removeClass('open');
        } else {
            $(this).addClass('open');
        }

        $('#global-navi').stop().animate({
            right: rightVal
        }, 200);
    });
});

$(function(){
    $('h1').textillate({
        // loop: true,
        in: {
            effect: 'fadeInLeftBig',
            delay: 0,
            shuffle: true
        },

        // out: {
        //     effect: 'hinge',
        //     delay: 100,
        //     shuffle: true
        // }
    });
});

