// Generate Fibonacci sequence up to n terms using recursion or iteration

const n1 = 10;
let sum=0;

let a=0;
let b=1;
console.log(a);
console.log(b);

function factorial(x)
{
for (let i=0;i<n1-2;i++)
{
    // console.log(i);
     sum=a+b;
     console.log(sum);
    a=b;
    b=sum;
}
}
factorial(n1);

