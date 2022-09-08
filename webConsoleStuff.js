// var hercules = 3
//
// var hercules = 1
//
// var littleMermaid = 3
//
// var brotherBear = 5
//
// var price = 0
//
// price = (hercules + littleMermaid + brotherBear) * 3
//
// console.log (price)
//
// 3.2
// var google = 400;
//
// var amazon = 380;
//
// var facebook = 350;
//
// let price = (google * 6) + (amazon * 4) + (facebook * 10);
//
// console.log(price);
//
// let canEnroll = "Accepted";
// let cantEnroll = "Get them out of my face";
// let classFull = true
// let conflict = false
// if((classFull == false) && (conflict == false)){
//     console.log(canEnroll);
// } else {
//     console.log(cantEnroll);
// }
//
//
//
//
//
// let member = "discounted";
// let nonmember = "2 or more";
// let nondiscount = "No discount"
// let isMember = false
// let Boughttwoitems = false
// if(isMember == true){
//     console.log(member);
// } else if((isMember == false) && (Boughttwoitems == true)) {
//      console.log(nonmember)
// } else {
//     console.log(nondiscount);
//  }

let username = "codeup";
let password = "notastrongpassword";
let char5 = password.length >= 5;
let noUserName = password.includes(username);
let not20 = username.length <= 20;
let noWhiteUser = username[0] === " ";
let noWhitePAss = password[0] === " ";
let lastIndexUsername = username.length - 1;
let lastIndexPassword = password.length - 1;
let noWhiteEndPass = password[lastIndexPassword] === " ";
let noWhiteEndUser = username[lastIndexUsername] === ' ';
let whiteSpace = false;

   if((noWhiteUser === true) || (noWhitePAss === true) || (noWhiteEndPass === true) || (noWhiteEndUser === true)){
       whiteSpace = true;
   };
console.log("5 characters is " + char5)
console.log("password contains username " + noUserName)
console.log("username is less than 20 " + not20)
console.log("password and username contain white space " + whiteSpace)

