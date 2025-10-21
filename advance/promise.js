// const promiseOne=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async Task is complete");
//          resolve()
//     },1000)
   
// })
// promiseOne.then(function(){
//     console.log("Promise task completed");
    
// })
new Promise(function(resolve,reject){
    setTimeout(function(){
    console.log("Async is completed");
    resolve()
    },2000)
}).then(function(){
    console.log("Promise is completed");
    
})
const promiseThree=new Promise(function(resolve,reject){
    resolve({username:'Sudhish',email:'sudhish@msrit.com'})
})
promiseThree.then(function(user){
    console.log(user);
    
})
const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({username:'Sudhish',pass:'123'})
        }
        else{
            reject("Error occured")
        }
        
    },1000)
})
promiseFour.then((user)=>{
    console.log(user.username);
    
}).then((username)=>{
    console.log(username);
    
}).catch((error)=>{
    console.log(error);
    
}).finally(()=>{console.log("Promise is either resolved or rejected");
});
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))