//Copy Part of Array Within Itself
var a=[12,10,43,22,11,31,54];

a.copyWithin(2); //only target value here..start defaults to zero 
console.log(a);

a.copyWithin(2,3);  //target value with start index
console.log(a);

a.copyWithin(2,0,2);  //target value with start and end index
console.log(a);
