// Intersection of two arrays

const arr11 = [1, 2, 3, 4, 5,9,19];
const arr12 = [3, 4, 5, 6, 7,11,13,15,17,18,19];
result = [];
let n=0;
if(arr11.length>arr12.length)
{
    n=arr11.length;
    }
    else
    {
      n=arr12.length;
    }
for (let key of arr11) {
    for (let i = 0; i <= n; i++) {
        if (key == arr12[i]) {
            result.push(key);
        }
            }
            }
            console.log("The intersection of two arrays are:", result);