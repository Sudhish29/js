function myname(){
    console.log("S");
    console.log("U");
    console.log("D");
    console.log("H");
    console.log("I");
    console.log("S");
    console.log("H");

    
}
// myname()
// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
    
// }
function addTwoNumbers(number1,number2){
   return number1+number2
    
}
const result=addTwoNumbers(9,5)
console.log("Result:"+result);


function loginUserMessage(username="s"){   //default value is passed if nothing is passed s will be printrd instead of undefined
    if(username===undefined){       // we can also use !username within the if condition
        console.log("Please enter username");
        return
        
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage());    //undefined

console.log(loginUserMessage("Sudhish")); 
