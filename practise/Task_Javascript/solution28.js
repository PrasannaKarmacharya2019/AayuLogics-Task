// greatest common divisor

const num2 = 48;
const num3 = 18;

function myFunction(a,b)
{
if(b==0)
{
    return a;
}
return myFunction(b,a%b);
}
result=myFunction(num2,num3);
console.log(result);
