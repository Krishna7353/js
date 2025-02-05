const user={
    username:"Krishna ",
    price:999,
    welcomemessage :function(){
    //     console.log(`${this.username},welcome to website`);   
    //    console.log(this) 
    }
}
user.welcomemessage()
user.username='kalu'
user.price=894
user.welcomemessage()
// console.log(this) 









// function chai(){
//     let username="Krishna"
//     console.log(this.username);
    
// }

// chai()



// const chai=function(){
//     let username="Krishna"
//     console.log(this.username);

// }


// const chai=()=>{
//     let username="Krishna"
//     console.log(this.username);

// }
// chai()



// const addtwo=(num1,num2)=>{
// return num1+num2                ---> explicit function
// } 


// const addtwo=(num1,num2)=>num1+num2 -->implicity function


// const addtwo=(num1,num2)=>( num1+num2) 

const addtwo=(num1,num2)=>({username :"krishna"}) 
console.log(addtwo(4,5));                       