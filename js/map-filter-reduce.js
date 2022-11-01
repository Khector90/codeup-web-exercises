"use strict"

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// 2. Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

let three = users.filter(function(user){
    return user.languages.length >=3;
})
console.log(three);



// 3. Use .map to create an array of strings where each element is a user's email address

let emails = users.map(users =>({
    emails: `${users.email}`
}))
 console.log(emails)

// 4. Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
let totalYear =users.reduce(function (previousValue, currentValue){
    return previousValue + currentValue.yearsOfExperience
    }
,0)

console.log("total years summed:" +totalYear);
console.log(`average exp math: ${totalYear / users.length}`);

// 5.Use .reduce to get the longest email from the list of users.
let longest = users.reduce(function(previousValue, currentValue){

    if (currentValue.email.length > previousValue.length){
        previousValue = currentValue.email
    }
    return previousValue
}, "")

console.log(longest);
// 6. Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

let string = users.reduce(function (previousValue, currentValue, currentIndex, myarray){
    let punctuation = ",";
    if (currentIndex === myarray.length - 1){
        punctuation = "."
    }
    return previousValue + currentValue.name + punctuation + " ";
}, "your instructors are : ")

console.log(string);