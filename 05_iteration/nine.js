const myNums=[1,2,3]
const mytotal=myNums.reduce(function(acc,carrval){
// console.log(`${acc} and ${carrval}`)
    return acc+carrval
},0)




// const Mytotal=myNums.reduce((arr,currval)=>arr+currval,0)
// console.log(mytotal)



const shoppingcart=[
{
    course:"java",
    price:1893
},
{
    course:"python",
    price:188
},
{
    course:"Data analytics",
    price:15000
},
{
    course:"Artificial inteligence",
    price:1500
},
]

const totalvalueofcart=shoppingcart.reduce((arr,currval)=>arr+currval.price,0)

console.log(totalvalueofcart);

