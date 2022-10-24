"use strict"

// $(function() {
//     alert( 'The DOM has finished loading!' );
// });

// let header= $('#header').html();
// alert(header);

// $(".li").css('font-size', '20px');

// $(".head, paragraph, li").css('background-color', '#FF0')


$('#header').click(function() {
        $(this).css('background-color', '#FF0');
})

$('p').dblclick(function() {
    $(this).css('font-size', '18px');
})

$('li').hover(
    function() {
        $(this).css('color', 'red');
    },
    function() {
        $(this).css('color', 'black');
    }
);



