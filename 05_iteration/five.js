const coding=["java","ruby","Python","Javascript","cpp"]

coding.forEach(function (value){
console.log(value );
})


coding.forEach((item)=>{
// console.log(item);
})


function printme(item){
    // console.log(item); 
}

// coding.forEach(printme(item))







coding.forEach((item,index,arr)=>{
console.log(item,index,arr);
})




const myCoding=[
{
    languageName:"Java",
    languageFileNAme:'j'
},



{
    languageName:"python",
    languageFileNAme:'py'
},
{
    languageName:"Ruby",
    languageFileNAme:'r'
},

{
    languageName:"cpp",
    languageFileNAme:'c'
},
]


myCoding.forEach((item)=>{
    // console.log(item.languageName);
    
})





