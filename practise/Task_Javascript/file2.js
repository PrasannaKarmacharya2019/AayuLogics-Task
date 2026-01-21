// Removing duplicate values from an array using set

const arr2 = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7];

let s1=new Set(arr2);
let arr=Array.from(s1)
console.log("Removing duplicates using sets:",arr);