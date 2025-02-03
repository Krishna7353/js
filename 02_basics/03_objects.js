//singleton
//object create

//object litrals


const mysym=Symbol('key12')



const jsuser= {
    name:"krishna",
    "full name":"Krishna Rathod",
    email:"krishnarathod7353@gmail.com",
    [mysym]:"mykey12",
    age : 21,
    location :"Bangalore",
    isLoggedIn:false,
    lasLoginIn:['Monday','tuesday']


}

// console.log(jsuser.email);
// console.log(jsuser["email"]);
// console.log(jsuser["full name"]);
// console.log(typeof jsuser[mysym]);



jsuser.email="kalu@gmail.com";
// Object.freeze(jsuser)


jsuser.email="Kalu@2022@gmail.com"
console.log(jsuser)



jsuser.greeting = function(){
   console.log("hello js user");
   
    
}
jsuser.greetingtwo= function(){
    console.log(`hello js user ${this.name}`)
}



console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());




