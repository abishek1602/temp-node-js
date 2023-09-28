const { readFile, writeFile, write } = require("fs");
console.log("start")
readFile("./content/subfolder/first.txt", "utf-8", (err, res) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = res;

  readFile("./content/subfolder/second.txt", "utf-8", (err, res) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = res;
    writeFile(
      "./content/result2async.txt",
      `Edited information for ASYNCHRONOUS: ${first} , ${second}`,
      (err, res) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log('done with the task');
      }
    );
  });
});
console.log('starting next task')