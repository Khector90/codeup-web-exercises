"use strict";

//
// let input = prompt("Please enter a number between 1 and 50 that is odd. ")
//
// for (input % 2 !== 0 || 27 + " is an even number try again."){
//     if (input % 3 == 1){
//         console.log("the number is odd");
//     } else {
//
//     }
//
// }
let input = "";


while (true){
     input = prompt("please enter an odd number that is between 1 and 50");
    if(input % 2 !== 0 && input <= 50 && input >= -1){
         break;
    }
}
for (let i = 1; i < 50; i += 2){
    if(input == i){
        console.log("Yikes, skipping this number " + i)
        continue;
    }
    console.log("here is the odd number " + i);
}