// const str = "A man a plan a canal Panama";
// let str2=str.toUpperCase()
// let reversedString='';
//     for (let i=str2.length-1;i>=0;i--)
// {
// if(str[i]!=" "){
// reversedString+=str2[i];
// }}
// console.log(reversedString);
// console.log(str2);
// if (str2==reversedString)
// {
//     console.log("This is plindrome");
// }
// else 
// {
//     console.log("This is not a palindrome");
// }

// for the whole sentence


const str = "A man a plan a canal Panama";
let str2 = str.toUpperCase();

function isPalindrome(str2) {
  let arr = [];

 
  for (let i = 0; i < str2.length; i++) {
    let c = str2[i];
    if (c !== " ") {
      arr.push(c); 
    }
  }

  
  for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

if (isPalindrome(str2)) {
  console.log("Sentence is palindrome");
} else {
  console.log("Sentence is not palindrome");
}