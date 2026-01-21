// Calculate factorial using recursion
const num4 = 5;

function recursion(x) {
    if (x == 0 || x == 1) {
        return 1;
    }
    else {
        return x * recursion(x - 1);
    }
}
console.log(recursion(num4));


// function recursion(x) {
   
//         return x * recursion(x - 1);
    
// }
// console.log(recursion(num4));


