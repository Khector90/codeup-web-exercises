"use strict"



let pattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'b', 'a'];

let current = 0;

let keyHandler = function (event){
    if (pattern.indexOf(event.key) < 0 || event.key !== pattern[current])
    {
        current =0;
        return;
    }
    current++;
    if (pattern.length === current){
        current = 0;
        alert('Dang ol got 30 more lives....man')
    }
};


document.addEventListener('keydown', keyHandler, false);

$(.body).css('background', 'https://media.giphy.com/media/YhSVi82JQiuFa/giphy.gif')