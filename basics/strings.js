let name="Sudhish"
let usn="1ms23is128"
console.log(`My name is ${name} and usn is ${usn}`);
const gameName=new String('Sudhish')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.charAt(1));
console.log(gameName.indexOf('d'));
const newString=gameName.substring(0,4)//negative indices are considered as 0
console.log(newString);
const anotherString=gameName.slice(-2,2)//charascters are given from the last position
console.log(anotherString);
const hi='My name is Sudhish Mazumdar'
console.log(hi);

// console.log(hi.trim());
console.log(hi.split(' '));



