const crypto = require("node:crypto")


crypto.pbkdf2Sync("password","salt",5000000,50,"sha512");

console.log("hello world");
console.log()