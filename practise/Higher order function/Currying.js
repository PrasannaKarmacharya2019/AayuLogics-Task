function mul(x)
{
    return function(y)
{
    return x*y;
}
}
var mulFn=mul(2);
console.log(mulFn(5));
