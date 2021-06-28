let N = prompt("Please enter expression:");
function postfixEval(string) {
  let stack = [];
  let ch; 
  for (var k = 0, length = string.length; k < length; k++) {
    ch = string[k];
    
    if (/\d/.test(ch))
      stack.push(ch);
  
    else if (ch in operators) {
      let b = +stack.pop();
      let a = +stack.pop();
      let value = operators[ch](a, b);
      stack.push(value);
    }
  }
  if (stack.length > 1)
    throw "ParseError: " + string + ", stack: " + stack;
  return stack[0];
}

let operators = {
  "+": function (a, b) 
  { 
    return a + b 
  },
  "-": function (a, b) 
  { 
    return a - b 
  },
  "*": function (a, b) 
  { 
    return a * b 
  },
  "/": function (a, b) 
  { 
    return a / b 
  }
};

document.getElementById('stack').innerHTML="Answer is: "+postfixEval(N);
