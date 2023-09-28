const { readFileSync, writeFileSync} = require("fs");
console.log("start")
const first = readFileSync("./content/subfolder/first.txt", "utf-8");
const second = readFileSync("./content/subfolder/second.txt", "utf-8");

// console.log(first, second);

writeFileSync(
  "./content/result1.txt",
  `Here is the result before ${first},${second}`,
  { flag: "a" }
);
console.log('done with this task')
console.log('starting new task')
//{flag: 'a'} is used for appending in a file and not changing everytime we update the information
