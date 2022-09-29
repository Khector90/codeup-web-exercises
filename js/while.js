"use strict";

// let i = 1
// while(i *= 2){
//     console.log(i);
//     if(i == 65536 )
//     break
// }




let allCones = Math.floor(Math.random() * 100) + 50;

do {
    let soldCones = Math.floor(Math.random() * 5) + 1;
    if (allCones < soldCones) {
        console.log("I cannot sell you " + soldCones + " I only have " + allCones);
    } else if (allCones > soldCones) {
        console.log("I can sell you " + soldCones)
        allCones -= soldCones
        console.log("I have " + allCones + " left");
    } else {
        console.log("All the cones be gone");
        allCones -= soldCones;
    }
} while (allCones > 0);

