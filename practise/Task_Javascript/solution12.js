// Implement a curry function that takes a function and returns a curried version
// console.log(add(1,2,3));

// function add(a,b,c)
// {
//     let sum=a+b+c;
// return sum;
// }




// function sum(a,b,c) {
//        return a + b + c;
//     }
// const curriedSum=curry(sum);
// console.log("All at once", curriedSum(1,2,3));

// const addOne=curriedSum(1);
// const addOneTwo=addOne(2);
// console.log("One By one:", addOneTwo(3))
// console.log("Mixed", curriedSum(1,2)(3))
// console.log("Mixed (another way):", curriedSum(1)(2,3));




// Method 3
function sum(a){
   return (b)=>{
        return (c)=>
            {
                return a+b+c;
            }
    }
}
console.log(sum(1)(2)(3));


function sum(a){
    function (b){
        function (c){
            return a+b+c;
        }
    }
}
console.log(sum(1)(2)(3));



