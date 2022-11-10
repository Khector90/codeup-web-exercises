



// Create a function that accepts a GitHub username, and returns a promise that resolves returning just the
// date of the last commit that user made. Reference the github api documentation to achieve this

const baseUrl = `https://api.github.com/users/Khector90/events`;


 function lastCommit(){
     return fetch(baseUrl,{headers: {'Authorization': `token ${github}`}})
         .then((data) => data.json())
         .then (jsonInfo => {
             console.log(jsonInfo);
             return "Last commit was: " + jsonInfo[0].commit.author.date +"user name is: " + jsonInfo[0].commit.author.name
         })
         .catch(function (error){
             console.log(error)
         });
 }

 lastCommit().then((res) => console.log(res));

 const wait = (num) => {
     return new Promise((resolve,  reject) => {
         setTimeout(() => {
             resolve();
         }, num);
     })
 }
 wait(1000).then(() => console.log(`You'll see this after 1 second`));
wait(3000).then(() => console.log(`You'll see this after 3 second`));