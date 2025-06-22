//we dont use var as it lets the local scope variable to be used outside

const b=20
var c=100
if(true){
    let a=100
    const b=20
    var c=69  //we dont use var as it can be accessed outside the local scope 
    console.log("INNER",a);
    
}
console.log(c);
