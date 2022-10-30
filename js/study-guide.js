"use strict"
// /**
//  * Online Shopping
//  * Create a function named freeShipping that determines whether a shopping order is eligible for free shipping. An order is eligible for free shipping if the total cost of items purchased exceeds $50.00.
//  *
//  * Examples
//
 let freeShipping1 = [ {Shampoo: 50.99},
     {Rubber_Ducks: 50.99}];
//  * freeShipping({ Flatscreen_TV: 399.99 }) ➞ true
//  * freeShipping({ Monopoly: 11.99, Secret_Hitler: 35.99, Bananagrams: 13.99 }) ➞ true
//  *
//  * Notes
//  * Ignore tax or additional fees when calculating the total order cost.
//  */

function freeShipping(obj){
    let something = Object.values(obj);
    let sum = 0;
    for (let i = 0; i < something.length; i++) {
        sum += something[i]
    } return sum > 50;
}

console.log(freeShipping(freeShipping1));


// /**
//  * Convert Address to Object
//  * Write a function named convertAddressToObject that accepts a string that contains a street number (as a string) and street name separated by a space characters, and returns an object with properties streetNumber and streetName.
//  *
//  * Examples
//  *
// convertAddressToObject('8626 Sunny Oaks') ➞ {streetNumber: '8646', streetName: 'Sunny Oaks'}
// convertAddressToObject('5408 Villa Nueva') ➞ {streetNumber: '5408', streetName: 'Villa Nueva'}
let address = '8626 Sunny Oaks'
 function convertAddressToObject (x) {
    let arr = x.split(" ");
    let obj = {
        streetNumber: arr[0],
        streetName: `${arr[1]} ${arr[2]}`
    }
    return obj
}

console.log(convertAddressToObject(address));


//
// /**
//  * Count total pets
//  * Write a function named totalPets that accepts an array of objects where each object represents a person, and has a 'pets' property for their owned pets. The function should return the sum of every object's numPets property.
//  *
//  * Examples
//  *
let pets1 = [
    {name: 'Fernando Mendoza', pets: 1},
       {name: 'Douglas Hirsh', pets: 8},
       {name: 'Kenneth Howell', pets: 2}
]
function totalPets(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i].pets;
    }
    return sum
}
console.log(totalPets(pets1));


// //  * Get Sum of People's Budget
// //  * Create the function named getBudgets that takes an array with objects and returns the sum of people's budgets.
//
 let budgets = [
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve",  age: 32, budget: 40000 },
   { name: "Martin",  age: 16, budget: 2700 }
 ]
let budgets2 = [
    { name: "John",  age: 21, budget: 29000 },
    { name: "Steve",  age: 32, budget: 32000 },
    { name: "Martin",  age: 16, budget: 1600 }
]

let sum1 = 0;
let sum2 = 0;
let totalSum = 0;

function getBudgets(){
budgets.forEach(element =>{
    sum1 = sum1 + element.budget
    console.log(element.budget);
})
    budgets2.forEach(element => {
        sum2 = sum2 + element.budget
        console.log(element.budget);
    })
    totalSum = totalSum + sum1 + sum2
    console.log(totalSum);
}


console.log(getBudgets());




