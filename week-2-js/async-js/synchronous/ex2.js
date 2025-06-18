function sumOfN(n) {
  let temp = 0;
  for (i = 1; i <= n; i++) {
    temp = i + temp;
  }
  return temp;
}

let val = sumOfN(100);
console.log(val);
