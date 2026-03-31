//returns a new array containing only the elements that satisfy a condition.
var arr1=[
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
var result1= arr1.filter((e)=>{
    return e.age>25;
})
console.log(result1);

 var result2= arr1.filter((e)=>{
    return e.name=="Rohit";
 })
 console.log(result2);