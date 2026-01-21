// capitalize first letter of each word
const string = "the quick";
obj={};
for (const char of string){
// console.log(char)
obj[char]=(obj[char]||0)+1;
// console.log(obj[char]);
 if(string[char]==" "||string[char]==0){
  return string[char]=string[char].toUpperCase();
 }
}
console.log(obj);

