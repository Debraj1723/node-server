const fs = require("fs");
const https = require("https");

console.log("hello world");

var a = 102393;
var b = 20986;

https.get("https://dummyjson.com/products/1", (res) => {
  console.log("Fetched Data Successfully");
});

setTimeout(() => {
  console.log("setTimeout called after 5 seconds");
}, 5000);

fs.readFile("./file.txt", "utf8", (err, data) => {
  console.log("File Data : ", data);
});

function multiplyFn(){
    const result =  a * b;
    return result;
}

const c = multiplyFn();

console.log(c);





/*
hello world
1232383
file Data :
fetched data
setTimeout
*/