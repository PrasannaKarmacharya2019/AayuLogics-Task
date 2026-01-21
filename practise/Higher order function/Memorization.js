function memorize(func) {
    var cache = {};
    return function (arg) {
        if (cache[arg]) {
            return cache[arg];
        }
        else {
            var res = func(arg);
            cache[arg] = res;
            return res;
        }
    };
}
function slow(num) {
    console.log("Computing...");
    return num * 2;
}
var fast = memorize(slow);
console.log(fast(5));
console.log(fast(5));



// Passing Functions as Arguments
function greet(name,callback)
{
    console.log("Hello "+name);
    callback();
}
function sayGoodbye(){
    console.log("Goodbye!")
}
greet("PK",sayGoodbye);