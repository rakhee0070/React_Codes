//Returns the index of the first element that satisfies a condition.
//If no match → returns -1.
var arr1=[30,4,10,2,50,6];
var result1= arr1.findIndex((e)=>{
    return e>=10;
})
console.log(result1);


const products = [
  { id: 1, name: "Wireless Mouse", rating: 4.3, price: 599 },
  { id: 2, name: "Bluetooth Keyboard", rating: 4.1, price: 999 },
  { id: 3, name: "USB-C Charger", rating: 4.5, price: 799 },
  { id: 4, name: "Laptop Stand", rating: 4.2, price: 1299 },
  { id: 5, name: "Noise Cancelling Headphones", rating: 4.6, price: 4999 },
  { id: 6, name: "Smart Watch", rating: 4.0, price: 2999 },
  { id: 7, name: "Portable SSD 1TB", rating: 4.7, price: 6999 },
  { id: 8, name: "Gaming Mouse", rating: 4.4, price: 1499 },
  { id: 9, name: "Mechanical Keyboard", rating: 4.6, price: 3499 },
  { id: 10, name: "LED Monitor 24-inch", rating: 4.5, price: 8999 },
  { id: 11, name: "Laptop Backpack", rating: 4.2, price: 1199 },
  { id: 12, name: "USB Hub", rating: 4.1, price: 699 },
  { id: 13, name: "Webcam HD", rating: 4.0, price: 1599 },
  { id: 14, name: "Bluetooth Speaker", rating: 4.3, price: 1999 },
  { id: 15, name: "Power Bank 20000mAh", rating: 4.4, price: 1499 },
  { id: 16, name: "Fitness Band", rating: 3.9, price: 1999 },
  { id: 17, name: "External Hard Drive 2TB", rating: 4.5, price: 5499 },
  { id: 18, name: "Tablet 10-inch", rating: 4.2, price: 10999 },
  { id: 19, name: "Wireless Earbuds", rating: 4.3, price: 2499 },
  { id: 20, name: "Smartphone Stand", rating: 4.1, price: 399 }, 
];
const result2=products.findIndex((e)=>{
    return e.id==8;
})
console.log(result2);