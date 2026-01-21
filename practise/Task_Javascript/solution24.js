// Move all zeros to the end of an array while maintaining order


const arr8 = [0, 1, 0, 3, 12, 0, 5];
let x=[];


for (let key in arr8)
{
    // console.log(key)
  if(arr8[key]!==0)

{
    x.push(arr8[key]);
   
}


}
//  console.log(x);
const n=arr8.length-1;
// console.log(n);

for(let i=0;i<n;i++)
    {
console.log(x[i]);
if (x[i]==undefined)
{
    x.push(0);
}
}
 console.log(x);




