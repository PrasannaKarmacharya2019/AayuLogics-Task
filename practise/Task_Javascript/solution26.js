// Check if a number is prime

let isPrime=true;
const num1 = 7;
for(let i=2;i<=num1/2;i++)
{
    if (num1%i==0)
    {
isPrime=false;
break;
    }
    }
    if (isPrime!=false)
    {
        console.log(num1,"number is prime");
            }
            else
            {
              console.log(num1,"number is not prime");  
            }