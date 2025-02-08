//for 


for (let i = 0; i <=10 ;i++) {
    const element = i;
    if(i==5){
        // console.log("5 is the best");  
    }
    // console.log(element);
}



for(let i=1;i<=10;i++){
    // console.log(`outerloop value is ${i}`);
    
    for(let j=1;j<=10;j++){
    // console.log(`Innerloop value ${j} and innerloop value ${i}`);
    // console.log(i+' * ' +j +' = ' +i*j);
     }
}



Myarr=["flash","Batman","superhero"]


for(let i=0;i<Myarr.length;i++){
   const element=Myarr[i];    
//    console.log(element);
}

for(let i=0;i<=20;i++){
    if (i==5) {
        console.log(`detected ${i}`);
        break   
    }
    console.log(`value of i is ${i}`);
}




for(let i=0;i<=20;i++){
    if (i==5) {
        console.log(`detected ${i}`);
        continue;
    }
    console.log(`value of i is ${i}`);
}



