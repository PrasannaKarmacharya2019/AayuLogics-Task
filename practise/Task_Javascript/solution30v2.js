// Find all prime numbers up to n (Sieve of Eratosthenes)

const n2=30;
let isPrime= new Array(n2+1).fill(true);

isPrime[0]=false;
isPrime[1]=false;
// console.log(isPrime);
let primes=[];

for (let i=2;i*i<=n2;i++)
{
   console.log("value of i:", i);
    console.log(isPrime[i],i);
    
    for (let j=i*i;j<=n2;j=j+i)
    {
       console.log(isPrime[j], "value of j", j);
       isPrime[j]=false;
    }
}
for (let i=2;i<=n2;i++)
{
    if(isPrime[i])
    {
        primes.push(i);
    }
}
console.log(primes);
