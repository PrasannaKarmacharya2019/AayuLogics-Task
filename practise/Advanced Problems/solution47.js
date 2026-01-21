const users = [
  { name: "Alice", age: 25, score: 85 },
  { name: "Bob", age: 30, score: 90 },
  { name: "Charlie", age: 35, score: 95 },
  { name: "Fraud", age: 25, score: 95 }
];


function sorting(x)
{
x.sort(function (a,b){
   if (a.age!==b.age)
   {
    return a.age-b.age;
   }
   else
    {
        return b.score-a.score;
    }
})
}

sorting(users);
console.log(users);