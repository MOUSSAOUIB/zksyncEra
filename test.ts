var dotenv = require("dotenv");
dotenv.config();

const myString = process.env.zk_PRIVATE_KEY;

console.log(myString);