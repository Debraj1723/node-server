const fs = require("fs");

const a = 100;

setImmediate(()=> console.log("setImmediate"));

Promise.resolve("Promise").then(()=> console.log("promise"));

fs.readFile("./file.txt","utf8",() =>{
    console.log("File Reading CB");
});

setTimeout(()=> console.log("Timer expired"),0);

process.nextTick(()=> console.log("nextTick"));

function printA(){
    console.log("a=",a);
}

printA();

console.log("last line of the file.");