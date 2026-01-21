// Check if a string contains balanced parentheses
const str10 = "(({}{[]))";
let count=0;
for (let key of str10)
    {
   if(key==="("||key==="{"||key==="[") 
    {
        count=count+1;
            } 
            else if(key===')'|| key===']'||key==='}')
                {
                count=count-1;
            }
            
    }
    if (count===0)
        {
            console.log("String is balanced.")
        }
        else {
            console.log("String is not balanced.")
        }