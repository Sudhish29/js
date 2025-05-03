//object literals
mySym=Symbol("key1")
const JsUser={
    name:"Sudhish",
    age:19,
    location:"Bengaluru",
    [mySym]:"mykey1",//Symbol can only be accessed by []
    email:"sudhish@gmail.com",
    isLoggedIn:false,
    LastLoginDays:["Monday","Tuesday"]
}
//We can access the objects using . operator but we mostly prefer using[] and use "" inside [] while accessing the objects
console.log(JsUser["email"]);
console.log(typeof JsUser["age"]);
console.log(JsUser[mySym]);
JsUser.email="sudhish@oracle.com"
// Object.freeze(JsUser)//freeze only works onthe Object as a whole and not on the primitive datatypes 
JsUser.email="sudhish@microsoft.com"
JsUser.location="Kolkata"
console.log(JsUser.email);
console.log(JsUser.location);
console.log(JsUser);
JsUser.greeting=function(){
    console.log("Hello");
    
}
JsUser.greeting2=function(){
    console.log(`Hello Js User ${this.name}`);
    
}
// console.log(JsUser.greeting);//function returnback
console.log(JsUser.greeting());
console.log(JsUser.greeting2());


