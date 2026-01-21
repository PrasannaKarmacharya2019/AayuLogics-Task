// using Object.assign() operator
const obj2 = { a: 1, b: 2 };
const obj3 = { b: 3, c: 4 };
const obj4 = { c: 5, d: 6 };



// Utilizing spread operator
const combinedSpread={...obj2,...obj3,...obj4}
console.log(combinedSpread);

// Utilizing object assign
const combined=Object.assign(obj2,obj3,obj4);
console.log(combined);


