"use strict";
exports.__esModule = true;
var dotenv = require("dotenv");
dotenv.config();
var myString = process.env.zk_PRIVATE_KEY;
console.log(myString);
