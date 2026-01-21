// Group an array of objects by a property using reduce()
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 },
  { name: "David", age: 30 }
];

const groupedItems = people.reduce((accumulator, item) => {
    console.log(accumulator,item)
    const age = item.age;
    if(!accumulator[age]){
        accumulator[age]=[]
    }
    accumulator[age].push(item.name);
    return accumulator
},{});
console.log(groupedItems);




const numbers=[1,2,3];
const total=numbers.reduce(
        (accumulator,currentValue)=>accumulator+currentValue
    )
console.log({total});