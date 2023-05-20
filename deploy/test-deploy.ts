var dotenv = require("dotenv");
dotenv.config({ path: '../.env' });

const hi = process.env.zk_PRIVATE_KEY;


console.log(hi);