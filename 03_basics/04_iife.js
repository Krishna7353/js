// Imediately Invoked Function Expressions  (IIFE)


(function chai(){
    //named iife
    console.log("Connected to DB");
})();



( (name)=>
    //Unamed iife
console.log(`${name}, connected DB`)
)("krishna")

