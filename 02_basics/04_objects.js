const tinderUser= new Object()   //singleton


// const tinderUser={}
tinderUser.id=1452;
tinderUser.name="Krishna"
tinderUser.isLoggedIN=false;

// console.log(tinderUser);



const regularuser={
    email:"Krihnarathod7353@gmail.com",
    fullname:{
        userfullname:{
            fristname:"krishna",
            lastname:"Rathod"
        }
    }
}
// console.log(regularuser.fullname.userfullname.lastname);


const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3={5:"e",6:"f"}

// const obj4={obj1,obj2,obj3}


const obj4=Object.assign({},obj1,obj2,obj3)
// console.log(obj4);


const obj5={...obj1,...obj2,...obj3}
// console.log(obj5);

const user=[
    {
        id:1,
        email:"Kalu2022@gmail.com"
    } ,
    {
        id:2,
        email:"Kalu2023@gmail.com"
    } ,  
    {
        id:1,
        email:"Kalu2022@gmail.com"
    }
]
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));



// console.log(tinderUser.hasOwnProperty('isLoggedIN'))
// console.log(tinderUser.obj1.isPrototypeOf(obj2));



const course={
    courseName:"JS",
    coursePrice:"999",
    courseInstrutor:"Krishna"
}
const {courseInstrutor,coursePrice:name,price}=course;
console.log(course.courseInstrutor)
console.log(name);
console.log(price);


// {
//     courseName:"JS",
//     coursePrice:"999",
//     courseInstrutor:"Krishna"
// }
    [
        {},
        {},
        {},
    ]