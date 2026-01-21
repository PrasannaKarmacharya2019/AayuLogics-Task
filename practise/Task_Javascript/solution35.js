const arr16 = [1, 2, 3,9,9];
m=[];
res=null;
count=0;
for(let i=0;i<arr16.length;i++)
{
    m[arr16[i]]=(m[(arr16[i])]||0)+1;
    // console.log(m);
    if(m[arr16[i]]>count)
        {
            count=m[arr16[i]];
           res=arr16[i];
        }
         
}
console.log("The highest repeated number is:",res," repeated for:",count," times.");


