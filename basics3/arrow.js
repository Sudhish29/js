const user={
    username:"Sudhish",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username},welcome to github`);
        console.log(this);
        
        //console.log(this) prints the current context 
    }
}
user.welcomeMessage();
console.log(this);

user.username="sam"
user.welcomeMessage();
function sud(){
    let username="Unknown"
    console.log(this);
    
}
sud()//a long context is printed if the function is inside the global scope and not as an object
const chai=()=>{
    let username="Sudh"
    console.log(this);
    
}
chai()//Output:{}  context within the arrow function is printed

// const addTwo=(num1,num2)=>{
//  return num1+num2
// }
// console.log(addTwo(3,4));


//IMPLICIT RETURN ARROW STATEMENT
// const addTwo=(num1,num2)=>num1+num2
// console.log(addTwo(3,4));
//In arrow function,when {} are used then return statement is used and if() is used then return statement is not used and statements are written directly
const efhef=()=>({username:"Unknown"})
console.log(efhef());
