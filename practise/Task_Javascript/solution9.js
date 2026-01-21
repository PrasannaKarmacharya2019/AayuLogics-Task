// non repeating character in string

const string="aaaaaabbccdeeffffffzzz";
let result={};
for (let char of string)
    {
      result[char]=(result[char]||0)+1;
    //   console.log(result[char]);
      if(result[char]==1){
        // console.log("The non-repeating strings are ",char);
      }
    }
let name=Object.keys(result);
console.log("The non-repeating strings are: ", name)
  
    