// Compress a string (e.g., "aaabbc" -> "a3b2c1") 
// const str9 = "aaabbbccccdd";
// res = {};
// count = 1;
// compressed = '';
// for (let i = 1; i < str9.length; i++) {
//     // console.log(str9[i]);
//     if (str9[i] === str9[i + 1]) {
//         count = count + 1;
//     }
//     else {
//         compressed =compressed+str9[i] + count;
// count=1;
//     }
   
// }
//  console.log(compressed);


// Compress a string (e.g., "aaabbc" -> "a3b2c1")
count=1;
compressed='';
const str9 = "aaabbc";
for (let i=0;i<str9.length;i++)
{
    if (str9[i]===str9[i+1])
    {
        count=count+1;
    }
    else
         {
            compressed=compressed+str9[i]+count;
            count=1;
        }
}
console.log("Compressed data is:",compressed);

