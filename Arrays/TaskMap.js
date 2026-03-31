const users = [
  { id: 1, name: "Ajay Sharma", age: 28, address: "Nagpur, Maharashtra", mobile: "9876543210" },
  { id: 2, name: "Rahul Verma", age: 15, address: "Pune, Maharashtra", mobile: "9123456780" },
  { id: 3, name: "Sneha Patil", age: 14, address: "Mumbai, Maharashtra", mobile: "9988776655" },
  { id: 4, name: "Amit Joshi", age: 35, address: "Delhi, India", mobile: "9090909090" },
  { id: 5, name: "Priya Mehta", age: 29, address: "Ahmedabad, Gujarat", mobile: "9012345678" },
  { id: 6, name: "Rohit Gupta", age: 18, address: "Jaipur, Rajasthan", mobile: "9345678123" },
  { id: 7, name: "Neha Singh", age: 16, address: "Lucknow, Uttar Pradesh", mobile: "9234567812" },
  { id: 8, name: "Vikas Kumar", age: 30, address: "Patna, Bihar", mobile: "9567890123" },
  { id: 9, name: "Anjali Deshmukh", age: 17, address: "Indore, Madhya Pradesh", mobile: "9789012345" },
  { id: 10, name: "Karan Malhotra", age: 33, address: "Chandigarh, India", mobile: "9876501234" }
];


//Extract all names//
const names=users.map((e)=>{
    return e.name;
})
console.log(names);


//Count adults//
const adults= [];
users.forEach((e)=>{
if(e.age>=18){
    adults.push(e);
}
})
console.log(adults);
console.log(adults.length);


//Add new property
const addIsAdult=users.map((e)=>{
    // if(e.age>=18){
    //     e.isAdult=true;
    // }else{
    //     e.isAdult=false;
    // }
    e.age>=18 ? e.isAdult=true : e.isAdult=false;
    return e;
})
console.log(addIsAdult); 


//Covert users array into an object with Name as the key
const userObject={};
users.forEach((e)=>{
    userObject[e.name]=e;
})
console.log(userObject);

//Find the user with longest name
var longestUser=users[0];
users.forEach((e)=>{
    if(e.name.length >longestUser.name.length){
        longestUser= e;
    }
});
console.log("...");
console.log(longestUser);