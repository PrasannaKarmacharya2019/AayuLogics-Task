// Input data
const flatArray = [
  { id: 1, name: "Root", parentId: null },
  { id: 2, name: "Child1", parentId: 1 },
  { id: 3, name: "Child2", parentId: 1 },
  { id: 4, name: "GrandChild", parentId: 2 }
];

// Adding static ages to each item
let ages=[12,24,34,45]
for (let i = 0; i < flatArray.length; i++) {
flatArray[i].age = ages[i];
  }

  // STEP 1: Add children array to each object
for (let i = 0; i < flatArray.length; i++) {
flatArray[i].children = [];
  }
// console.log(flatArray);
// STEP 2: Build the tree
let roots = [];

for (let i = 0; i < flatArray.length; i++) {
//   let item = flatArray[i];
// console.log("item:",item);

  if (flatArray[i].parentId === null) {
    // This is a root node
    roots.push(flatArray[i]);
    // console.log("roots inside loop",roots);
  }
    else {
  // Find parent and add as child
    for (let j = 0; j < flatArray.length; j++) {
      if (flatArray[i].parentId===flatArray[j].id) {
        flatArray[j].children.push(flatArray[i]);
      }
    }
  }
}
  // console.log("roots outside roots",roots);
// STEP 3: Print result
// console.log("Tree structure:");
console.log(JSON.stringify(roots,2,2));
// console.log(JSON.stringify(roots));
