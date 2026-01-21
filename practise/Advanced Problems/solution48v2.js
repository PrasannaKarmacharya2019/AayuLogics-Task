
// code
const strings = ["flower", "flow", "flight"];
function longestCommonPrefix(strings) {
  if (strings.length === 0) return "";

  let result = "";

  for (let i = 0; i < strings[0].length; i++) {
    let char = strings[0][i];

    for (let j = 1; j < strings.length; j++) {
      if (strings[j][i] !== char) {
        return result;
      }
    }

    result += char;
  }

  return result;
}

console.log(longestCommonPrefix(strings));