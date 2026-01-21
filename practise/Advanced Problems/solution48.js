// Implement a function to find the longest common prefix among an array of strings

const strings = ["flower", "flow", "flight"];
    
    let result="";
for(let i=0;i<strings[0].length;i++)
{
  let char=strings[0][i];
for (let j=1;j<strings.length;j++)
    {
        if(strings[j][i]!==char)
            {
                return result;
            }
           
    }
    result=result+char;
console.log("Result is ",result);

}










