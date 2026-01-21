// function to deep freeze an object (make it immutable recursively)
// // Shallow Freeze Object
const obj1 = { a: 1, b: { c: 2 } };

// Object.freeze(obj);
// obj.key2[0] = "newValue";  
// console.log(obj);






// Deep Freeze
function deepfreeze(obj) {
    if (typeof obj !== "object" || obj == "null")
        return obj;
    else {

            Object.keys(obj).forEach(function(key) {
                {
        deepfreeze(obj[key]);
    }});

        //        let keys = Object.keys(obj);
        //       for (let i = 0; i < keys.length; i++) {
        //     let currentKey = keys[i];
        //     value = obj[currentKey];
        // }
        // deepfreeze(value);
    }
    console.log(Object.freeze(obj));
    return Object.freeze(obj); 
}
const deepFrozenObj=deepfreeze(obj1);

console.log("Before Change")
console.log(deepFrozenObj);

try {
    deepFrozenObj.key3[0] = "newValue"; // Throws an error in strict mode
} catch (e) {
    console.error(`Error: ${e.message}`);
}

console.log("After Change:");
console.log(deepFrozenObj);