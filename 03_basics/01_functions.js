

function sayMyName(){

 console.log("K");
console.log("R");
console.log("I");
console.log("S");
console.log("H");
console.log("K");
console.log("A");
}
// sayMyName()

function addtwonumber(number1,number2){
    console.log(number1+number2)
}
function addtwonumber(number1,number2) {
    // let result= number1+number2;
    // return result;
   
    return number1+number2;
    
}

// const result=addtwonumber(4,6)
// console.log("Result:",result);

function loginUserMessge(username="sam") //parameter
{
if (username===undefined) {
    console.log("please enter user name");
    return ;
}
 return `${username} just loged in `  
}

console.log(loginUserMessge("krishna"));     // argument 




function calculateCartPrice(val1,val2,...num1) {
     return num1
}
console.log(calculateCartPrice(100,200,400,500));



const user=
{
username:"Krishna",
price:199
}

function handleObject(anyobject) 
{
   console.log( `username name is ${anyobject.username} and price ${anyobject.price}` )
}


// handleObject(user)
// handleObject
handleObject({
    username:"kalu",
    price:199

})


const newArr=[100,2000,2550,8521]

function foundArray(getAray){
     return getAray[3]
}

console.log(foundArray(newArr))
