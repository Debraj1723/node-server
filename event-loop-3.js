const fs = require("fs");

setImmediate(() => {
  setImmediate(() => console.log("inner setImmediate"));
  console.log("setImmediate");
});

Promise.resolve("Promise").then(() => {
  Promise.resolve("Promise").then(() => {
    console.log("inner promise");
  });
  console.log("promise");
});

fs.readFile("./file.txt", "utf8", () => {
  setTimeout(() => console.log(" 2nd Timer expired"), 0);
  process.nextTick(() => console.log(" 2nd nextTick"));
  setImmediate(() => console.log(" 2nd setImmediate"));
  console.log("File Reading CB");
});

setTimeout(() => {
  setTimeout(() => console.log("inner Timer expired"), 0);
  console.log("Timer expired");
}, 0);

process.nextTick(() => console.log("nextTick"));

console.log("last line of the file.");

/* 
last line of the file.
nextTick 
promise
Timer expired
setImmediate

pausing at poll phase as it is waiting for file read and has all queues empty  as soon as the file read is done it starts working from that phase it self;

File Reading CB
2nd nextTick
2nd setImmediate
2nd Timer expired
*/
