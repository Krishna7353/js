const  marval_Heros=['kalu','thor','spiderman'];
const dc_heros=['superman','batman','kalu'];
// marval_Heros.push(dc_heros);
// console.log(marval_Heros);
// console.log(marval_Heros[2][1]);


const allheros=marval_Heros.concat(dc_heros)
console.log(allheros);
const all_new_array=[...marval_Heros,...dc_heros] // spread operator
console.log(all_new_array);





const anotherarray=[1,2,3,[4,5,5],[6,7,[8,9]]]
// console.log(anotherarray.flat(Infinity));






console.log(Array.isArray('Krishna'));
console.log(Array.from('Krishna'));
console.log(Array.from({name:'krishna'}))



let kalu1=10;
let kalu2=30;
let kalu3=40;
console.log(Array.of(kalu1,kalu2,kalu3))



