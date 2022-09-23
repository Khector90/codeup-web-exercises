"use strict";

//Area of a Triangle: Write a JavaScript function
// that accepts the 3 lengths of a triangle and outputs the triangle’s area.
//
// let side1 = parseInt(prompt("Enter 1st dim: "));
// let side2 = parseInt(prompt("Enter 2nd dim: "));
// let side3 = parseInt(prompt("Enter 3rd dim: "));
let side1 = parseInt(prompt("Enter 1st dim: "));
let side2 = parseInt(prompt("Enter 2nd dim: "));
let side3 = parseInt(prompt("Enter 3rd dim: "));

function area(){
    // let side1 = parseInt(prompt("Enter 1st dim: "));
    // let side2 = parseInt(prompt("Enter 2nd dim: "));
    // let side3 = parseInt(prompt("Enter 3rd dim: "));


    let s = (side1 * side2 * side3) / 2;
    // let areaValue = Math.sqrt( s *(s - side1) * (s - side2) * (s - side3));

}
let areaValue = Math.sqrt( s *(s - side1) * (s - side2) * (s - side3));

console.log(area("The area of the triangle is: ") +(areaValue));

//Reverse a String: Write a JS function that accepts a string
// and returns the string in reverse. example input: codeup, example output: puedoc




// function flip(flop) {
//     let arrayStrings = flop.split("");
//
//     let reverseArray = arrayStrings.reverse();
//
//     let joinArray = reverseArray.join("");
//
//     return joinArray;
//
// }
//
// let string = prompt("Enter a string: ");
// let result = flip(string);
// console.log(result)

// function reverseString(str) {
//
//     // return a new array of strings
//     let arrayStrings = str.split("");
//
//     // reverse the new created array elements
//     let reverseArray = arrayStrings.reverse();
//
//     // join all elements of the array into a string
//     let joinArray = reverseArray.join("");
//
//     // return the reversed string
//     return joinArray;
// }
//
// // take input from the user
// const string = prompt('Enter a string: ');
//
// const result = reverseString(string);
// console.log(result);



