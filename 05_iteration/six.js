const coding=["java","ruby","Python","Javascript","cpp"]

const value=coding.forEach((item)=>{
console.log(item);
return item
 
})
// console.log(value);



const num=[1,2,3,4,5,6,7,8,9,10]

const nums=num.filter((item)=> {
  return item>5
})
console.log(nums);

// const mynum=[]
// num.forEach((num)=>{
//    if(num>4){
//  mynum.push(num)
//    }
// })
// console.log(mynum)


const Books=[
    {
    title:'BookOne',genre:'Friction',publish:'1981',adition:'2004'
    },
    {
    title:'BookTwo',genre:'Science',publish:'1971',adition:'2015'
    },
    {
    title:'BookThree',genre:'Java',publish:'1995',adition:'1996'
    },
    {
    title:'BookFour',genre:'History',publish:'1961',adition:'2003'
    },
    {
    title:'BookFour',genre:'Science',publish:'1945',adition:'2016'
    },
    {
    title:'BookFive',genre:'Friction',publish:'1999',adition:'2012'
    },
    {
    title:'BookSix',genre:'History',publish:'1945',adition:'2009'
    },
    ]
    
    
let  username=Books.filter((bk)=>{
    return bk.genre==='History' && bk.adition>2003;
    })


    username=Books.filter((bk)=>bk.title==='BookSix')
    console.log(username)