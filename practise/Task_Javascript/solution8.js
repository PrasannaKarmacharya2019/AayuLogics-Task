
// count=0;
// for(const char of str3)
//     {
// count++;
// for(let j=0,sum=0;j<=count;j++)
//     {
//         str3[count]==str3[j];
//         sum=sum+1;
//         console.log(sum);
//     }

//         console.log("run time count:",count)

//     obj[str3]=(obj[str3]||0)+1;    
//     }
//     console.log(obj)

// const str3 = "java scriptj";
// const obj={};
// count=0;
// for (const char of str3){
//     console.log(char);
//     // count++;
//     // console.log(count);
//     obj[char]=(obj[char]||0)+1;
//     console.log(obj[char])
// }
// // console.log(obj);



// worked
const str3 = "java ";
const obj={};
for (const char of str3){
    // console.log(char)
    // console.log(str3)
       obj[char]=(obj[char]||0)+1;
    //    console.log(obj[char]);
    //    console.log(obj," for loop:",char);
   
   }
// console.log(obj);


const string="javascript";
const result={};
for (let char of string)
    {
      result[char]=(result[char]||0)+1;
      console.log(result[char])
    }
console.log(result);

