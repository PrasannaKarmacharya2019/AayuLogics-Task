function permutationsIterative(str) {
  let result = [""];

  for (let char of str) {
    let newResult = [];

    for (let perm of result) {
        console.log("perm:",perm,"result:",result);
      for (let i = 0; i <= perm.length; i++) {
        console.log("perm.slice(0,i):",perm.slice(0, i));
        console.log("char",char);
        console.log("perm.slice(i):",perm.slice(i));
        newResult.push(perm.slice(0, i) + char + perm.slice(i));
        console.log(newResult);
        console.log("-----------Next Iteration------------------")
      }
    }

    result = newResult;
  }

  return result;
}

// console.log(permutationsIterative("abc"));
permutationsIterative("ab");
