// Find the longest substring without repeating characters
const str8 = "abcabcbb";
m=[];
count = null;
let s1 = str8.split('');
let s2 = s1.sort();


for (let key of s2)
    {
        m[key]=(m[key]||0)+1;
        // console.log(key,m[key],m)
        
        if (m[key]>count)
            {
                count=m[key];
                res=key;
            }
            }
            console.log("The longest string is:",res,"with count of ", count);
            
    