// Higher order function example
function fun()
{
    console.log("Higher order function");
}

function fun2(any)
{
    any();
    any();
}
fun2(fun);

// Popular Higher Order Functions in JavaScript
// const n=[1,2,3,4,5];
// const sqrt=n.map (function(num){
//    return num*num;
// })
// console.log("sqrt=",sqrt);

const n=[1,2,3,4,5]
const srqaure=n.map((num)=>num*num);
console.log(srqaure);

