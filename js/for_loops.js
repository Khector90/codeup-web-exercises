"use strict";

function showMultiplicationTable(num, range) {
    for (let i = 1; i <= range; ++i) {
        document.write(num + " * " + i + " = " + num * i + "<br>");
    }
}
let num = 7;
let range = 10;
document.write("Number: " + num + "<br>");
document.write("Range: " + range + "<br>");
document.write("Multiplication table of " + num + "<br>");
showMultiplicationTable(num, range);