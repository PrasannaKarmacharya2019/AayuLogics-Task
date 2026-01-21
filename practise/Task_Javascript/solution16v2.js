// shallow cloneElement
const person1=
{
    name:"Ram",
    address:{
        city:"up"
    }
}
const shallowcopy={...person1}
shallowcopy.address.city="UK";
console.log(shallowcopy.address.city);
console.log(person1);







// deep clone using JSON stringify

const person=
{
    name:"Ram",
    address:{
        city:"up"
    }
}
const deepcopy=JSON.parse(JSON.stringify(person));
deepcopy.address.city="UK";

console.log(deepcopy.address.city);



//StructuredClone
const people2=
{
    name:"Ram",
    address:{
        city:"Salt-Lake"
    }
}
const deepclone=structuredClone(people2);
deepcopy.address.city="Bowling";
console.log(people2.address.city);


// structuredClone
const obj1 = { a: 1, b: { c: 2, d: { e: 3 } } };
const deep=structuredClone(obj1)
deep.b.c.d.e=5;
console.log(deep.b.c.d.e);
console.log("after deep colne",obj1.b.c.d);