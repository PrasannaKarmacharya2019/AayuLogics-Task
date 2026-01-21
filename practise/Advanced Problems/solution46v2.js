// Deep Freeze
const obj = { a: 1, b: { c: 2 } };

function deepfreeze(x) {
    if (typeof x !== "object" || x === 'null') {
        return x;
    }
    else {
        Object.keys(x).forEach(function (key) {
            // deepfreeze(obj[key]);
            deepfreeze(x[key]);
        })
    }
    // console.log(Object.freeze(x));
    return Object.freeze(x);
}
const deepFrozen = deepfreeze(obj);
console.log("Before Change");
console.log(deepFrozen);
try
{
    deepFrozen.key3[0]="newValue";
    }
    catch(e)
    {
        console.error(`Error:${e.message}`)
    }


console.log("After Change");
console.log(deepFrozen);
