/* What's the major difference between sync and async
So basically when we carry out the three following tasks
1. boil some water (5 mins)
2. do some laundry (30 mins)
3. send a package via mail (3 mins)

In synchronous operations we would carry out these tasks one by one i.e.
initially wait for the water to boil for 5 mins , do the laundry for 30 mins and
send the package via mail in 3 mins

So the total time taken would be 38 mins

In asynchronous operations we would carry out these tasks concurrently (when two or more things happen at the same time)
So we will keep the water for boiling , the put the clothes in laundry and then go to send the package via mail

So the total time would be less than 38 mins
*/

const fs = require("fs");

function print(err, data) {
  if (err) {
    console.log("no such file found");
  } else {
    console.log(data);
  }
}

// this is an asynchronous function
fs.readFile("a.txt", "utf8", print);

console.log("done");

/* initially when the readFile line is hit, the readFile function triggers the print function 
when the searching for file is done . Till then it would execute the other lines of code
*/
