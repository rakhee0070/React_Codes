//returns a new array with the element at a given index replaced.
var arr=[10,20,30,40,50,60];
var result= arr.with(2,10);
console.log(result);
console.log(arr); //does not mutate the original array

var result2= arr.with(-3,20);
console.log(result2);