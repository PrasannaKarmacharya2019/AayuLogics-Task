const deepFreeze = (obj) => {
    if (obj === null || typeof obj !== "object") {
        return obj; // Exit if not an object or is null
    }

    // Recursively freeze properties (including arrays)
    Object.keys(obj).forEach((key) => {
        deepFreeze(obj[key]);
    });

    return Object.freeze(obj); // Freeze the current object
};

// Test cases
const obj1 = { a: 1, b: { c: 2 } };

const deepFrozenObj = deepFreeze(obj1);

console.log("Before Change:");
console.log(deepFrozenObj);

try {
    deepFrozenObj.key1[0] = "newValue"; // Throws an error in strict mode
} catch (e) {
    console.error(`Error: ${e.message}`);
}

console.log("After Change:");
console.log(deepFrozenObj);