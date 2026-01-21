function greet(name)
{
console.log("Hello "+name);
}
function User(callback)
{
    callback("PK")
}


User(greet);


function mul(factor)
{
    return function(num){
        return num*factor;
    }
}
const mul2=mul(2);
console.log(mul2(5));
const mul3=mul(3);
console.log(mul3(5));


console.log("Array Method map() as a Higher-Order Function")
const a=[1,2,3,4,5];
const double=a.map(function abc(n){
return n*2;
})
console.log(double);