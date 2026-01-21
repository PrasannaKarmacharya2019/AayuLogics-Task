const flatArray = [
  { id: 1, name: "Root", parentId: null },
  { id: 2, name: "Child1", parentId: 1 },
  { id: 3, name: "Child2", parentId: 1 },
  { id: 4, name: "GrandChild", parentId: 2 }
];

for (let i=0;i<flatArray.length;i++)
{
    flatArray[i].children=[];
    
}
console.log(flatArray);
let roots=[];

for(let i=0;i<flatArray.length;i++)
{
    if(flatArray[i].parentId==null)
    {
        roots.push(flatArray[i]);
            }

else 
{
    for(let j=0;j<flatArray.length;j++)
    {
        if (flatArray[i].parentId===flatArray[j].id)
        {
flatArray[j].children.push(flatArray[i]);
        }
    }
}
}
console.log(JSON.stringify(roots,null,2))

