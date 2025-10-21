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
    },1000)
}).then(function(){
    console.log("Promise is completed");
    
})