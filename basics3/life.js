//Immediately Invoked Function Expression
(function chai(){
    console.log(`DB CONNECTED`);
    
})(); //IIFE is used to remove pollution of variables from global scope and to immediately invoke the function and ; should be used at the end to invoke IIFE
(()=>{
    console.log(`DB 2 CONNECTED`);
    
})();

((name)=>{
    console.log(`DB3 CONNECTED AND NAME OF USER IS ${name}`);
    
})('Sudhish');