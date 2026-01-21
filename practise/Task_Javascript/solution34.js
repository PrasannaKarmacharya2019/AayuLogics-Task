// Shuffle an array randomly (Fisher-Yates algorithm)
const arr15 = [1, 2, 3, 4, 5];

function myFunction(arr15) {
  for (let i=0;i<arr15.length; i++) {
    let x=Math.random();
    console.log("x:",x, "i+1=",i+1);
    let j = Math.floor(x * (i+1));
    
    console.log("value of j:",j);
    
    let k = arr15[i];
    arr15[i] = arr15[j];
    arr15[j] = k;
     }
  
}
myFunction(arr15);
console.log(arr15);

