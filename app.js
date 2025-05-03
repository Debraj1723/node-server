require("./xyz.js");
const { sumIt,multiplyIt } = require("./calculate");

const a = 3;
const b = 4;

console.log(globalThis === global);

sumIt(a, b);
multiplyIt(a, b);
