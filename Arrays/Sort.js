// Sorts array
// By default, sort() converts elements to strings and sorts them in lexicographical (dictionary) order.
var arr1=[30,4,10,2,50,6];
arr1.sort();
console.log(arr1); 

arr1.sort((a,b)=>a-b) //For Ascending Order
console.log(arr1); 

arr1.sort((a,b)=>b-a);
console.log(arr1); //For Descending Order

var arr2=["Rohan", "Akash", "Rohit", "Neha", "Puja"];
arr2.sort();
console.log(arr2);

var arr3=[
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
arr3.sort((a,b)=>a.age-b.age); //For objects..sorting by age in ascending order
console.log(arr3);