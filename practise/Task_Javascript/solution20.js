// const obj8={ first_name: "John" };

// let result={};

// for (let key in obj8)
// {
//     let parts = key.split("_");
//     console.log(typeof parts);
//     // console.log(parts);
// let camelKey=parts[1];
// console.log(typeof camelKey);
// console.log(camelKey);
// camelKey=camelKey[0].toUpperCase()+parts.slice(1);
// console.log(camelKey);
// }


const obj8 = { first_name: "John", last_name: "Doe", age_in_years: 30 };


let result = {};

for (let key in obj8) {
  let parts = key.split("_");
// console.log(key);

  let camelKey = parts[0];

  for (let i = 1; i < parts.length; i++) {
    camelKey = camelKey+parts[i][0].toUpperCase() + parts[i].slice(1);
   
  }

  result[camelKey] = obj8[key];
  console.log(obj8[key]);
  console.log(result[camelKey])
  console.log(camelKey);
  console.log(key);
}

console.log(result);