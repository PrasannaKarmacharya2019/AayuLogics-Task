// two strings are anagrams
const str6 = "listenzq";
const str7 = "silenxut";
let value = false;
function convertion(x) {
    // spliting
    spliting = x.split('');
    // then sorting
    sorting = spliting.sort();
    return sorting;
}

let obj1 = convertion(str6);
console.log(obj1);
let obj2 = convertion(str7);
console.log(obj2);
const n = obj1.length;
// console.log("value of n:",n)
function check(a, b) {
    // console.log("type and Value:",typeof a,typeof b,a,b);
    // console.log("lenth of a:",a.length);
    for (let i = 0; i < a.length; i++) {
        //   console.log("value of i:",i)
        //   console.log("a:",a[i]);

        if (a[i] === b[i]) {
            console.log("Value check", i, a[i], b[i])
            value = true;
        }
        else {
             value = false;
        }

    }
}

check(obj1, obj2);
if (value) {
    console.log("Two strings are anagrams");
}
else {
    console.log("Two strings are not anagrams");
}







