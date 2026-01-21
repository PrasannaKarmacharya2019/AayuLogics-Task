// Sum of all even numbers Using filter()

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// Step 1st
function isEven(value) {
    return value % 2 == 0;
}
let filtered = arr1.filter(isEven)
console.log(filtered)

console.log("The sum of all even numbers using filter() method is " + add(filtered))

function add(filtered) {
    let sum = 0;
    for (let i = 0; i < filtered.length; i++) {
        sum = sum + filtered[i];

    }
    return sum;
}


// Step 2 Method
const sum1 = filtered.reduce((acc, x) => acc + x, 0);
console.log("The sum of all even numbers using reduce() method is " + sum1)


