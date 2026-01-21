// Find the first duplicate in an array using Set

const arr17 = [1, 2, 3,3, 4, 2, 5, 6, 3];
const seen = new Set();

// for (const num of arr17) {
//   console.log(num,"-",arr17.indexOf(num),"- seen:",seen);
//     if (seen.has(num)) {
//         break;
//   }
//   // seen.add(num);
//   console.log(">>",seen.add(num));
// }


// console.log("Set of seen elements:", seen);


for (const key of arr17) {
  // console.log(key,"-",arr17.indexOf(key));
  if (seen.has(key)){
    console.log("First Duplicate is:",key);
  break;
  }
  seen.add(key);
   }


