// Rotate an array to the right by k positions

const arr6 = [1, 2, 3, 4, 5];
const k1 = 2;


const lastPart = arr6.slice(-k1);
const firstPart = arr6.slice(0, arr6.length - k1);
const rotatedArray = lastPart.concat(firstPart);

console.log(rotatedArray);