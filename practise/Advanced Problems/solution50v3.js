let expression="2 + 3 * 4 - 5";
  let arr = expression.split(" ");

  // Handle multiplication first

    let i = arr.indexOf("*");

    let result = Number(arr[i - 1]) * Number(arr[i + 1]);
console.log("Before Splice:result",result)
    // Replace "3 * 4" with "12"
    console.log("arr:",arr)
            console.log(arr.splice(i - 1, 3, result))
  console.log("After splice, arr",arr,"result:",result)


  // Now only + and -
  let total = Number(arr[0]);

  for (let i = 1; i < arr.length; i += 2) {
    let operator = arr[i];
    let num = Number(arr[i + 1]);

    if (operator === "+") total += num;
    if (operator === "-") total -= num;
  }
console.log("Total is",total);
  





