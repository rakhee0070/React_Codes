const products = [
  { name: "Wireless Mouse", rating: 4.3, price: 599 },
  { name: "Bluetooth Keyboard", rating: 4.1, price: 999 },
  { name: "USB-C Charger", rating: 4.5, price: 799 },
  { name: "Laptop Stand", rating: 4.2, price: 1299 },
  { name: "Noise Cancelling Headphones", rating: 4.6, price: 4999 },
  { name: "Smart Watch", rating: 4.0, price: 2999 },
  { name: "Portable SSD 1TB", rating: 4.7, price: 6999 },
  { name: "Gaming Mouse", rating: 4.4, price: 1499 },
  { name: "Mechanical Keyboard", rating: 4.6, price: 3499 },
  { name: "LED Monitor 24-inch", rating: 4.5, price: 8999 },
  { name: "Laptop Backpack", rating: 4.2, price: 1199 },
  { name: "USB Hub", rating: 4.1, price: 699 },
  { name: "Webcam HD", rating: 4.0, price: 1599 },
  { name: "Bluetooth Speaker", rating: 4.3, price: 1999 },
  { name: "Power Bank 20000mAh", rating: 4.4, price: 1499 },
  { name: "Fitness Band", rating: 3.9, price: 1999 },
  { name: "External Hard Drive 2TB", rating: 4.5, price: 5499 },
  { name: "Tablet 10-inch", rating: 4.2, price: 10999 },
  { name: "Wireless Earbuds", rating: 4.3, price: 2499 },
  { name: "Smartphone Stand", rating: 4.1, price: 399 },
  { name: "Desk Lamp", rating: 4.2, price: 899 },
  { name: "Office Chair", rating: 4.4, price: 7999 },
  { name: "Printer", rating: 4.0, price: 6499 },
  { name: "Scanner", rating: 3.8, price: 4999 },
  { name: "Router Dual Band", rating: 4.3, price: 2499 },
  { name: "Graphic Tablet", rating: 4.5, price: 3999 },
  { name: "Microphone", rating: 4.2, price: 1799 },
  { name: "Tripod Stand", rating: 4.1, price: 999 },
  { name: "Action Camera", rating: 4.4, price: 6999 },
  { name: "Smart TV 43-inch", rating: 4.6, price: 28999 },
  { name: "Gaming Controller", rating: 4.3, price: 2499 },
  { name: "VR Headset", rating: 4.2, price: 5999 },
  { name: "Electric Kettle", rating: 4.1, price: 1299 },
  { name: "Air Fryer", rating: 4.5, price: 5999 },
  { name: "Mixer Grinder", rating: 4.0, price: 3499 },
  { name: "Induction Cooktop", rating: 4.2, price: 2499 },
  { name: "Water Purifier", rating: 4.4, price: 8999 },
  { name: "Ceiling Fan", rating: 4.1, price: 1999 },
  { name: "Room Heater", rating: 4.3, price: 2999 },
  { name: "Air Conditioner 1.5 Ton", rating: 4.6, price: 35999 },
  { name: "Refrigerator 260L", rating: 4.5, price: 23999 },
  { name: "Washing Machine", rating: 4.4, price: 18999 },
  { name: "Dishwasher", rating: 4.3, price: 32999 },
  { name: "Vacuum Cleaner", rating: 4.2, price: 5999 },
  { name: "Hair Dryer", rating: 4.0, price: 999 },
  { name: "Trimmer", rating: 4.1, price: 1499 },
  { name: "Electric Toothbrush", rating: 4.3, price: 1999 },
  { name: "Digital Weighing Scale", rating: 4.2, price: 799 },
  { name: "Iron Box", rating: 4.1, price: 1199 },
  { name: "Coffee Maker", rating: 4.4, price: 4999 }
];
const prd45=[];
const prd4=[];
const remaining=[];
products.forEach((e)=>{
    if(e.rating>4.5 && e.price>3499){
        prd45.push(e);
        delete e.name;
    }else if(e.rating>=4 && e.price>1499){
        prd4.push(e); 
        delete e.name;
    }else{
        remaining.push(e)
        delete e.name;
    }
})
console.log(prd45);
console.log(prd4);
console.log(remaining);
