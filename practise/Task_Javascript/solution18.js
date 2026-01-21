






// if (typeof person==='object')
// {
//     let valuesArray = Object.values(person);
// arr.push(valuesArray[0]);
// console.log(arr);
// valuesArray.splice(0,1);
// console.log(valuesArray);

// if (typeof valuesArray==='object')
// {
//     let valuesArray = Object.values(valuesArray);

// console.log(valuesArray);
// }
// }


// const obj5 = { a: 1, b: { c: 2, d: { e: 3, f: 4 } }, g: 5 };
// arr=[];

// function flatten(a){
//     for (let char in a)
//     {
//     if(typeof a[char]==='object')
//     { 
//         flatten(a[char]);
//         console.log("runtime", char, a[char]);
//     }
// else
//     {
// arr.push(a[char]);

// }
// }
// }
// flatten(obj5);
// console.log("output:",arr);


const obj5 = { a: 1, b: { c: 2, d: { e: 3, f: 4 } }, g: 5 };
arr = [];

function looping(x) {
    for (let char in x) {
        if (typeof x[char] === 'object') {
            looping(x[char]);
        }
        else {
            arr.push(x[char]);

        }

    }
}
looping(obj5);
console.log(arr);








