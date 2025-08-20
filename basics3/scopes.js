//we dont use var as it lets the local scope variable to be used outside the function scope
let a=10
const b=20
var c=100
if(true){
    let a=100
    const b=20
    var c=69  //we dont use var as it can be accessed outside the local scope 
    //therefore var should always be avoided
    console.log("INNER",a);
    
}
console.log(a);
function one(){
    const username="Sudhish"//In a nested function global variables can be accessed in an inner local function but local variables cannot be accessed by the global scope
    const branch="ISE"
    console.log(branch);
    
    function two(){
    const website="youtube"
    console.log(username);
    }
    // console.log(website);
    two()
}

one()
if(true){
    const username="Sudh"
    if(username==="Sudh"){
        const website="Github"
        console.log(username+website);
        
    }
    // console.log(website);   //gives error as website cannot be accessed outside the scope
    
}
// console.log(username);  //gives error as username cannot be accessed outside the scope



// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



// addTwo(5)  //if function is called before it is declared with const as given below then it gives an error due to mini hoisting
const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5));
