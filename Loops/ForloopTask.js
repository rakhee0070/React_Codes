//...Find the maximum value in a array of numbers...//
arr= [23,45,12,42,23,24,67,87,98,65,32,44,62]; 

var maxValue= arr[0];  //..using for..of loop
for(var x of arr){
    if(x>maxValue){
    maxValue=x;
    }
}
console.log(maxValue)

var maximum=arr[0];   //..using forEach method
arr.forEach((e)=> {
    if(e>maximum){
        maximum=e;
    }
});
console.log(maximum);

var max= arr[0];    //..using Map method
arr.map((e)=>{
    if(e>max){
        max=e;
    }
})
console.log(max);

//....Reverse the array using loop..../
var reverseArray=[];     //..using for loop
for(var x=arr.length-1 ; x>=0 ; x--){
    reverseArray.push(arr[x]);
}
console.log(reverseArray);  

var reverseArray2=[];    //..using unshift
for(var a=0 ; a<arr.length ; a++){
    reverseArray2.unshift(arr[a]);
}
console.log(reverseArray2);

var reverseArray3=[];    //..using Map method
arr.map((e)=>{
    reverseArray3.unshift(e);
})
console.log(reverseArray3);

var reverseArray4=[];    //..using ForEach method
arr.forEach((e)=>{
    reverseArray4.unshift(e);
})
console.log(reverseArray4)
