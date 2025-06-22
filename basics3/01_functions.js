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
// console.log("Result:"+result);


function loginUserMessage(username="s"){   //default value is passed if nothing is passed s will be printrd instead of undefined
    if(username===undefined){       // we can also use !username within the if condition
        console.log("Please enter username");
        return
        
    }
    return `${username} just logged in`
}
//  console.log(loginUserMessage());    //undefined

// console.log(loginUserMessage("Sudhish")); 
function calculateCartPrice(val1,val2,val3, ...num){        //... is rest operator and it contains all the values in a single array
    //the val1,val2 and val3 takes the first 3 values and the rest are contained in the array by the..,(rest opertor) 
   return num
    
}
 console.log(calculateCartPrice(200,100,500));
 const user={
    username:"Sudhish",
    price:69
  
 }
 function handleObject(hello){
   console.log(`Username is ${hello.username} and price is ${hello.price} `);
   }
// handleObject(user)
handleObject({
    username:"Rand",
    price:6969,
    cartcolor:"red"
})
const arr=[100,200,300,400]
function returnSecondValue(get){
    return get[0]
}
// console.log(returnSecondValue(arr));
console.log(returnSecondValue([50,100,150,200]));

