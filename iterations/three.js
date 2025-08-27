//for of loop
const arr=[1,2,3,4,5]
for (const val of arr) {
    // console.log(val);
    
}
const hello="Hello World27"
for (const h of hello) {
    // console.log(`Each character is ${h}`);
    
}
const map=new Map();
map.set(1,"India")
map.set(2,"Doha")
map.set(3,"France")
map.set(4,"Switzerland")
map.set(5,"Austria")
map.set(6,"Italy")
map.set(7,"Germany")
console.log(map);

for (const [k,v] of map) {
    console.log(`${k} : ${v}`);
    
}
for (const [v,s] of map) {
    console.log(` ${v}  ${s}`);
    
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }Objects are not iterable by for of loop