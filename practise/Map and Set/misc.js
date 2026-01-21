// Understanding "new" set
const numbers=new Set();
numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(4);
// console.log(typeof numbers)
// console.log(numbers)


// Understanding has operator

const fruits=new Set([]);
// fruits.push("mango");
// fruits.push("banana");
fruits.add("grapes");
fruits.add("orange");
console.log(typeof fruits);
console.log(fruits);

let arr=[];
arr.push("grapes")
console.log(arr);
console.log(typeof arr);


console.log(fruits.has("grapes"));


// Understanding Map
const ages = new Map();

ages.set("John", 25);
ages.set("Sara", 30);

console.log(ages);


// Understanding Get
console.log(ages.get("John"));  // 25
console.log(ages.get("Alex"));  // undefined




