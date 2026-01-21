const increment = function(x) {
  let sum = x + 1;
  console.log("Increment:", sum);
  return double(sum);
};

const double = function(x) {
  let prod = x * 2;
  console.log("Double:", prod);
  return subtractTen(prod);
};

const subtractTen = function(x) {
  let result = x - 3;
  console.log("Subtract 3:", result);
  return result;
};

const result = increment(5);
console.log("Final Result:", result);