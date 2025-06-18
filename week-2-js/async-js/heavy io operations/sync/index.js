const fs = require("fs");

let a = fs.readFileSync("a.txt", "utf8");
console.log(a);
/* now if we observe this carefully , 
  assigning the text "yo kaustubh" from a file (a.txt) takes a delay of approx 1s
  but if we do the same thing statically by assigning the string directly to a variable,
  the time is saved over here
  these are heavy i/o operations
  */

let b = fs.readFileSync("b.txt", "utf8");
console.log(b);
