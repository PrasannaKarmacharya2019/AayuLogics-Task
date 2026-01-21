// Argument Objects are not available in arrow functions
function add(a,b){
  console.log(arguments);
  return a+b;
}
add(10,5);

// Argument Objects are not available in arrow function
const subtract=(a,b)=>{
  // Here argument is not taken
  // console.log(arguments);
  return a-b;
}
subtract(10,5);
