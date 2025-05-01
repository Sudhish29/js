const name=Array.from("Sudhish Mazumdar");
num1=100
num2=200
num3=300
const numbers=Array.of(num1,num2,num3);
console.log(Array.isArray(name))
console.log(Array.isArray(numbers
));
const itBranches=["CSE","ISE","CSE-AIML","CSE-CY","AIML"]
const lowerBranches=["Civil","Chemical","ECE","EIE"]

console.log(itBranches.concat(lowerBranches));   //concat does not manipulate the original array
const allBranches=[...itBranches,...lowerBranches]
console.log(allBranches);


