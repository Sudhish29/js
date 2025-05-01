const myArr=[1,2,3,4,5]
// console.log(myArr);
// myArr.unshift(69)
// console.log(myArr);
// myArr.shift()
// console.log( myArr);//type-object
// const newArr=myArr.join()
// console.log(newArr);//type-string  join operation converts arrray to string datatype
//array also performs push and pop operations
//.includes() and indexOf are also applicable for arrays same as strings

//diff between slice and splice
console.log(myArr.slice(1,3));//returns a group of characters given in the range before the last index but does not manipulate the original array
console.log(myArr);
console.log(myArr.splice(1,3));//returns the group of characters in the given range including the last limit and manipulates the original array by deleting the characters in the given range including the last limit
console.log(myArr);

