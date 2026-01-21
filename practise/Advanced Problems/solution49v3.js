const flatArray = [
  { id: 1, name: "Root", parentId: null },
  { id: 2, name: "Child1", parentId: 1 },
  { id: 3, name: "Child2", parentId: 1 },
  { id: 4, name: "GrandChild", parentId: 2 }
];

const getTree = (data) => {
    let root = null;
    const map = {};

    data.forEach(function(item) 
    {
        map[item.id] = {id: item.id, name: item.name}

    });

    console.log("value of map:",map);

    data.forEach(item => {
        if(item.parentId === null){
            root = map[item.id]
        } else {
            const parent = map[item.parentId]
            parent.children = parent.children || []
            parent.children.push(map[item.id])
        }
    })

    return root
}

const result = getTree(flatArray)

// console.log("-----------------------------------------------------")
// console.log(result,"final tree")
// console.log(JSON.stringify(result,null,2));