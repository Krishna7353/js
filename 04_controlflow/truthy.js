const username=[]

if(username){
    console.log("Got username"); 
}
else{
    console.log("Not got usernam:("); 
}

//falsyvlaue   0,-0,"",Bigint 0n,null,undefined,NaN


//truthyvalue   "0","False","  ",[],{},function(){}





// const truthy=function checking(num1,num2) {
//  return num1+num2
// }  
// if(truthy){
//     console.log("truthy")
// }
// else{
//     console.log("Falsy");
    
// }




// if (username.length==0) {
//     console.log("Array is empty");  
// }else{
//     console.log("Array is not empty"); 
// }


// const empty={
//     name :"krishna",
// }
// if (Object.keys(empty).length==0) {
//     console.log("object is empty");
// }
// else{
//     console.log("Object is not empty");
    
// }


/// Nullish Coalescing Operator (??): null undefined

// val1=10??51;
// val1=null??25;
// val1=undefined??215
val1=undefined??214??215

console.log(val1);


// ternary operator

// condition ? true :  false
 
const iceteaPrice=100;
iceteaPrice<=90?console.log("Price less than 80"):console.log("Price more than 80")


