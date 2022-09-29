"use strict";
// Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)

// function showMultiplicationTable(num, range) {
//     for (let i = 1; i <= range; ++i) {
//         document.write(num + " * " + i + " = " + num * i + "<br>");
//     }
// }
// let num = 7;
// let range = 10;
// document.write("Number: " + num + "<br>");
// document.write("Range: " + range + "<br>");
// document.write("Multiplication table of " + num + "<br>");
// showMultiplicationTable(num, range);

// Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:

function numRandom(x){
     Math.floor(Math.random() * (200 + 20) +1)
}

for (x =20; x <= 200; x++); {

    if (x === 0) {
        console.log(x +  " is even");
    }
    else if (x % 2 === 0) {
        console.log(x + " is even");
    }
    else {
        console.log(x + " is odd");
    }
}
