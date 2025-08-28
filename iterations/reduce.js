const Shoppingcart=[
    {
        itemName:"js course",
        price:2599
    },
    {
        itemName:"dsa",
        price:6000
    },
    {
        itemName:"mern stack",
        price:5000
    },
    {
        itemName:"ios development",
        price:10000
    },
]
const totalPrice=Shoppingcart.reduce((acc,p)=>acc+p.price,0)
console.log(totalPrice);
const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);
