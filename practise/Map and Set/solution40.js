function swap(strArr, i, j) {
  const temp = strArr[i];
  strArr[i] = strArr[j];
  strArr[j] = temp;
}

function permute(str, n = str.length, strArr = str.split(''))
 {
  if (n === 1) {
    console.log(strArr.join(''));
  } else {
    for (let i = 0; i < n; i++) {
      permute(str, n - 1, strArr);
      if (n % 2 === 0) {
        swap(strArr, i, n - 1);
      } else {
        swap(strArr, 0, n - 1);
      }
    }
  }
}

const str = 'abc';
permute(str);