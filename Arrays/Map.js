//Transform elements 
//creates a new array with the results of calling a provided function on every element of array
var arr1=[30,4,10,2,50,6];
var result1= arr1.map((e)=>{
return e*100;
})
console.log(result1);

var arr2=[
    {
        name: "Rohan",
        age:26
    }, {
        name: "Akash",
        age:22
    },{
        name: "Rohit",
        age:20
    },{
        name: "Neha",
        age:40
    },{
        name: "Puja",
        age:30
    },
];
var result2= arr2.map((e)=>{
    return e.name;
})
console.log(result2);

