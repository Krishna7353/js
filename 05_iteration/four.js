const Myobj={
    js:'Javascript',
    cpp:"c++",
    swift:"swift by Apple",
    R:"Ruby"
}


for (const key in Myobj) {
   console.log(`${key} shortcut is for ${Myobj[key]}`);
   }



   const prograaming =["java","cpp","javascript","rb","python"]

   for (const key in prograaming){
    console.log(prograaming[key]);
   }


const map=new Map()
map.set("IN","INDIA")
map.set("USA","united states of america")
map.set("FN","france")
map.set("ENG","england")//in map also cant iterate
for(const [key,value] in map){
    console.log(key, " " ,value); 
}