// Find the missing number in an array from 1 to n

const arr9 = [1, 2, 4, 5, 6]; 

let n=arr9.length+1;
// console.log(n);
let actualSum=0;
for (let key in arr9)
{
    actualSum=actualSum+arr9[key];
}
// console.log(actualSum);
let expectedSum=(n*(n+1)/2);
// console.log(expectedSum);

console.log("Missing Number is:", expectedSum-actualSum);