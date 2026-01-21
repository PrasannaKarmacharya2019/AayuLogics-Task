// Check if two objects are deeply equal
const obj={a:1}
const obj6 = { a: 1, b: { c: 2 } };
const obj7 = { a: 11, b: { c: 2 } };
   let arr1=[];
let arr2=[];
function check(x)
{
 
    for (let char in x)
        {
            // console.log(x)
           if (typeof x[char]==='object')
            {
                check(x[char]);
            }
            else
                {
arr1.push(x[char])
            }
        //   return arr1;
        }
  
}


function check1(y)
{
 
    for (let char in y)
        {
            // console.log(x)
           if (typeof y[char]==='object')
            {
                check1(y[char]);
            }
            else
                {
arr2.push(y[char])
            }
        
        }
  
}


check1(obj7);
check(obj6);
console.log(arr1);
console.log(arr2);

if (JSON.stringify(arr1) === JSON.stringify(arr2))
    {
        console.log("Both array are equal")
    }
    else{
        console.log("They are not equal")
    }

