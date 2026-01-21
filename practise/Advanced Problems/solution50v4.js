function evaluateExpression(expression) {
  let tokens = expression.split(" ");
  let stack = [];

  for (let i = 0; i < tokens.length; i++) {
    let token = tokens[i];

    if (token === "*") {
      let last = stack.pop();
      let next = Number(tokens[++i]);
      stack.push(last * next);
    } else if (token === "+") {
      continue;
    } else if (token === "-") {
      stack.push(-Number(tokens[++i]));
    } else {
      stack.push(Number(token));
    }
  }

  return stack.reduce((a, b) => a + b, 0);
}

console.log(evaluateExpression("2 + 3 * 4 - 5"));
