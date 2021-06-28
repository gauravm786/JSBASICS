
var a=1
var b=5
var c=6

var quadraticequation = b*b-4*a*c
var root=Math.sqrt(quadraticequation)

var val1=-b+root
var val2=val1/2*a

console.log(`quadratic equation in Positive : ${val2.toFixed(2)}`)

var val3=-b-root
var val4=val3/2*a

console.log(`quadratic equation in Negative : ${val4.toFixed(2)}`)