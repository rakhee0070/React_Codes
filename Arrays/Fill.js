//Fill Array with Static Value
var arr1=[10,20,30,40,50,60,70,80];
arr1.fill(0);    //value only..start defaults to zero
console.log(arr1);

arr1.fill(40,2);   //value with start index
console.log(arr1);

arr1.fill(20,3,7);  //value with start and end index
console.log(arr1);