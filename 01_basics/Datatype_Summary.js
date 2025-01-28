//premative :Primitive data types are the most basic data types in JavaScript. 
// They are immutable (cannot be changed) and are passed by value. 
// When you copy a primitive, you create a new, independent value.


const score=100;
const  scoreValue=100.3

const isLoggedIn=false
const outSideTemp=null
console.log(outSideTemp)
console.log(typeof(outSideTemp));

const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id==anotherId);
console.log(typeof(anotherId));
const bigint=214521048515415442n
console.log(bigint);
console.log(typeof(bigint));




//non premative 
//Non-primitive data types (also called reference types) are objects. They are mutable and are passed by reference.
 //When you copy a non-primitive value, it creates a reference to the same object in memory.

 // array ,objects,function

 const heros=["Dheeraj","Mohit","Krishna"];
 let myobj={
    name:"Krishna",
    Age:21,
 }
 const myFunction=function(){
    console.log("Hello world ");
    
 }







