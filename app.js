require("dotenv").config();
const express = require("express");
const app = express();
const logger = require("./lib/log/logger")
const applicationlogger = require("./lib/log/applicationlogger")
const accesslogger = require("./lib/log/accesslogger")
const PORT = process.env.PORT;

app.disable("x-powerd-by");

app.use(accesslogger());
app.get("/" , (req , res) => {
  res.json({message:"success"})
})
app.use(applicationlogger())
app.listen(PORT, () => {
  logger.console.info("start");
});
