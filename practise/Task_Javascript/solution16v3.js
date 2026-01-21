// structuredClone
const obj1 = { a: 1,
     b: { 
        c: 2, 
        d: { 
            e: 3 
        }
     }
    };
const deep = structuredClone(obj1)
deep.b.d.e = 5;
console.log(deep.b.d.e);
console.log("after deep colne",obj1.b.d.e);


// deepClone
