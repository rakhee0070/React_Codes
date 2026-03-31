//Combines mapping and flattening
var arr1= [[1, 2],[ 3,4,5],[6,7,8],[1,3]];

// var result1 = arr1.flatMap((e) => {
//     e.push(12);
//     return e;
// });

var result1= arr1.map((e)=>{
    e.push(12);
    return e;
})
console.log(result1);
var result2=result1.flat();
console.log(result2);

// let result2=arr1.flatMap((e)=>{
//     return e%2===0?[e]:[]
// })
// console.log(result2);


// [1,2]*2;