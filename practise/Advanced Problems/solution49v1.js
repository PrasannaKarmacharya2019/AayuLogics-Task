// Input data
const flatArray = [
  { id: 1, name: "Root", parentId: null },
  { id: 2, name: "Child1", parentId: 1 },
  { id: 3, name: "Child2", parentId: 1 },
  { id: 4, name: "GrandChild", parentId: 2 }
];

// Step 1: Create map
const map = new Map();

flatArray.forEach(function (item) {
  map.set(item.id, {
    id: item.id,
    name: item.name,
    parentId: item.parentId,
    children: []
  });
});

// Step 2: Create roots array
const roots = [];

// Step 3: Build tree
flatArray.forEach(function (item) {
  const node = map.get(item.id);

  if (item.parentId === null) {
    roots.push(node);
  } else {
    const parent = map.get(item.parentId);
    parent.children.push(node);
  }
});

// Step 4: Print result
console.log("Tree structure:");
console.log(JSON.stringify(roots, null, 2));
