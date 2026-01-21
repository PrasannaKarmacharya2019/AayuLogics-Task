// Get the difference between two arrays (elements in first but not second)
const arr13 = [1, 2, 3, 4, 5];
const arr14 = [3, 4, 5, 6, 7];
 result=[];

 for(i=0;i<arr13.length;i++)
    {
        let found=false;
        for (let j=0;j<=i;j++)
        {
            if(arr13[i]===arr14[j])
                {
                    found=true;
                    break;
                }
        }
     if(found==false)
     {
        result.push(arr13[i]);
     }
    }
    console.log(result);
