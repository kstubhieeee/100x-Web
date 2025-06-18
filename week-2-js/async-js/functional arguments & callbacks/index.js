function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

function doOperation(a, b, op) {
  /* the op is replaced with the word "sum" as the functional argument 
   which makes the functional call like this :
   sum(1,2) */
  return op(a, b);
}

// so here we have passed a callback name for a function
console.log(doOperation(1, 2, sum));
