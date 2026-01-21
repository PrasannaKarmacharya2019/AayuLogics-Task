// Find all unique values across multiple arrays using Set
const arr18 = [1, 2, 3];
const arr19 = [2, 3, 4];
const arr20 = [3, 4, 5];
result=new Set();

for (let key of arr18)
    {
        result.add(key);

    }
for (let key of arr19)
{
    result.add(key);
}
for (let key of arr20)
    {
        result.add(key);
    }

console.log(result);


