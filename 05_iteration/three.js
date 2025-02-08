// for of
//["","",""]
//[{},{},{}]

let numbers=[1,2,3,4,5]
for (const num of numbers) {
    console.log(num)
}



let greeting="Hello world"
for(const greet of greeting){
   
    if(greet==' '){
        // console.log(`detected ${greet}`);
        continue;
        
    }
    console.log(`Each value ${greet}`);
    
}





//maps


// maps store value in key and value
const map=new Map()
map.set("IN","INDIA")
map.set("USA","united states of america")
map.set("FN","france")
map.set("ENG","england")


console.log(map);



for(let [key,value] of map){
    console.log(key ,' :-> ',value);   
}


const Myobj={
    game1:'NFS',
    game2:'spiderman'
}
//object not  iterable 
// for(let [key,value] of Myobj){
//     console.log(key,value);
// }