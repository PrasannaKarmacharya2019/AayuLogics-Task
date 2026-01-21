// Deep clone an object without using JSON methods




function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  let clone;
  if (Array.isArray(obj)) {
    clone = [];
    for (let i = 0; i < obj.length; i++) {
      clone[i] = deepClone(obj[i]);
    }
  } else {
    clone = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        clone[key] = deepClone(obj[key]);
      }
    }
  }
  return clone;
}

const obj1 = { a: 1, b: { c: 2, d: { e: 3 } } };
const obj2 = deepClone(obj1);