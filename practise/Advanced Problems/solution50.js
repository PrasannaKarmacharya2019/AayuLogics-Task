const expression = "2 + 3 * 4 - 5"; 
let arr=expression.split(" ");
while (arr.includes("*")) {
let i=arr.indexOf("*")
console.log(i);
let result=Number(arr[i-1])*Number(arr[i+1]);
// console.log(result);
console.log(arr.splice(i-1,3,result));
}

console.log("arr is",arr);
let total=Number(arr[0]);
console.log("total:",total);
console.log("Inside-Loop Starts")
for (let i=1;i<arr.length;i=i+2)
    {
        let operator=arr[i];
console.log("operator:",operator);
let num=Number(arr[i+1]);
console.log("num:",num);
if(operator==="+")
{
    total=total+num;
}
if(operator==="-")
{
    total=total-num;
}

}
console.log("The Total is:",total);


