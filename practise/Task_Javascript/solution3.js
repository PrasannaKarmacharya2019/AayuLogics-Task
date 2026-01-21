// Finding the longest array using reduce

const arr3 = ["apple", "banana", "cherry", "dragonfruit", "elderberry"];

for(let i=0;i<arr3.length;i++){
   const res = arr3.reduce((acc, str) => acc + str.length, 0);
console.log(res, acc, str);
}
