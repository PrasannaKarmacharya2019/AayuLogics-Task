const obj6 = { a: 1, b: { c: 2 } };
const obj7 = { a: 1, b: { c: 2 } };

function flatten(obj)
{
    const arr=[];
    function transverse(obj){ 
    for (let key in obj){
        if(typeof obj[key]==="object")
        {
            transverse(obj[key]);
        }
        else 
            {
                arr.push(obj[key]);
            }
    }
    }
   transverse(obj);
   console.log(arr);
    return arr;
    
}
const arr1=flatten(obj6);
const arr2=flatten(obj7);
if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
  console.log("Two objects are deeply equal");
} else {
  console.log("They are not equal");
}