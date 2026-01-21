function evaluateExpression(expression) {

  // Step 1: split by space
  let tokens = expression.split(" ");

  let stack = [];

  // Step 2: handle multiplication first
  for (let i = 0; i < tokens.length; i++) {

    let token = tokens[i];

    if (token === "*") {
      let lastNumber = stack.pop();
      let nextNumber = Number(tokens[i + 1]);

      let result = lastNumber * nextNumber;
      stack.push(result);

      i++; // skip next number
    } else {
      stack.push(token);
    }
  }

  // Step 3: handle + and -
  let result = Number(stack[0]);

  for (let i = 1; i < stack.length; i += 2) {
    let operator = stack[i];
    let nextNumber = Number(stack[i + 1]);

    if (operator === "+") {
      result += nextNumber;
    } else if (operator === "-") {
      result -= nextNumber;
    }
  }

  return result;
}

console.log(evaluateExpression("2 + 3 * 4 - 5"));
