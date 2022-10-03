"use strict";
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// function evenNumbers(num) {
//    for(let i = 0; i < num.length; i++) {
//        array = num % 2 === 0;
//    }
//     // try let even numbers = number % 2 === 0 return []
// }

// re-write the following using a for loop: var i = 20; while (i >= 0) { console.log(i); i--; }
// for (let i =20; i >=0; i--){
//     console.log(i)
// }


// Add ‘strawberry’ to the beginning, middle, and end of the array.
let fruits = ["mango", "blueberries", "oranges", "banana", "papaya", "kiwi"];
fruits.push("strawberries");

fruits.unshift("strawberries");

 fruits.splice(4,0,"strawberries");