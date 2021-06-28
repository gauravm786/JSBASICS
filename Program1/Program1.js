

let N = 5;

let factorial = 1;

if(N<0)
{
    console.log("Can't find factorial for negative numbers.")
    return
}
else if(N==0)
{
    console.log("The factorial of 0! is 1.")
    return
}
else
{
    for(let num =1;num <=N;num++)
    {
        factorial=factorial*num;
    }
}
console.log("The factorial of "+`${N}! is ${factorial}.`);
