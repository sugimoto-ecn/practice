require("dotenv").config();
const express = require("express");
const app = express();
const logger = require("./lib/log/logger")
const applicationlogger = require("./lib/log/applicationlogger")
const accesslogger = require("./lib/log/accesslogger")
const router = require("./routes/index")
const PORT = process.env.PORT;

app.disable("x-powerd-by");

app.use(accesslogger());
app.use("/" , require("./routes/index"))
app.use(applicationlogger())

console.log("oooi")

app.listen(PORT, () => {
  logger.console.info("start");
});
