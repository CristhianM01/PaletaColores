$(function() {

    'use strick'
    $('#color1').on({
        click: function() {

            $('#palet1').show(250);
            $('#palet2').hide(250);
            $('#palet3').hide(250);
            $('body').removeClass();
            $('body').addClass("blue");
        }
    });

    $('#color2').on({
        click: function() {
            $('#palet1').hide(250);
            $('#palet2').show(250);
            $('#palet3').hide(250);
            $('body').removeClass();
            $('body').addClass("purple");

        }
    });


    $('#color3').on({
        click: function() {
            $('#palet1').hide(250);
            $('#palet2').hide(250);
            $('#palet3').show(250);
            $('body').removeClass();
            $('body').addClass("brown");

        }
    });
});