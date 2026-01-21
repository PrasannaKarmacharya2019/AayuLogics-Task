function mostFrequent(arr) {
    let m = [];
    let maxCount = 0;
    let res = null;
    for (let key of arr) {
        console.log("value of key:",key);
        console.log("value of m[key]",m[key])
       console.log("value of m:",m);
       
       console.log("----value after m[key] add----");
        m[key] = (m[key] || 0) + 1;
        console.log("value of m[key] after add",m[key])
console.log("value of 'm' after add:",m);

console.log("-----------------------------Next Iteration----------------------------")
        if (m[key] > maxCount) {
            maxCount = m[key];
            res = key;
        }
    }
    
    return res;
}

// Example usage
const arr = [4,2,2,6];

console.log(mostFrequent(arr));
// mostFrequent(arr);