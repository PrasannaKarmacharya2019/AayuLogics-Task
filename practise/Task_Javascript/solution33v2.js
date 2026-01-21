// Get the difference between two arrays (elements in first but not second)
const arr13 = [1, 2, 3, 4, 5];
const arr14 = [3, 4, 5, 6, 7];

let result = [];

for (let i = 0; i < arr13.length; i++) {
  let found = false;

  for (let j = 0; j < arr14.length; j++) {
    if (arr13[i] === arr14[j]) {
      found = true;
      break;
    }
  }

  if (!found) {
    result.push(arr13[i]);
  }
}

console.log(result);