let results = [];
const str11 = "abc";
for (let a of str11) {
  for (let b of str11) {
    for (let c of str11) {
      if (a !== b && b !== c && a !== c) {
        results.push(a + b + c);
      }
    }
  }
}

console.log(results);

// method2
function permutations(str) {
  if (str.length === 1) {
    return [str];
  }
  let result = [];
  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i];
    console.log("currentChar:",currentChar);
        let remainingChars = str.slice(0, i) + str.slice(i + 1);
        console.log(str.slice(0,i));
        console.log(str.slice(0+i));
console.log("remainingChars:",remainingChars)
    let remainingPermutations = permutations(remainingChars);
console.log(remainingPermutations);
    for (let perm of remainingPermutations) {
      result.push(currentChar + perm);
    }
  }

  return result;
}

// console.log(permutations("abc"));
permutations("abc");

