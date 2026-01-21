function add(x){
    return x+2;
}
function mul(y)
{
    return y*3;
}
function compose(f,g){
    return function(x)
    {
        return f(g(x));
    }
    
}

var res=compose(add,mul)(4);
console.log(res);