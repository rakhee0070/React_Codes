//Flatten Nested Arrays
//returns a new array with nested arrays flattened up to a specified depth.
var a=[10,20,[30,40,[50,60,70,[80]]]];

var result1= a.flat();
console.log(result1);

var result2= a.flat(2);
console.log(result2);

var result3=a.flat(Infinity);
console.log(result3);