const express = require("express");
require("dotenv").config();

const ErrorHandllers = require("./ErrorHandller/ErrorHandller");

const app = express();
app.use(express.json());
app.use(ErrorHandllers)

app.listen(process.env.PORT, () => {
  console.log(`Food deliver Hosted Server started on port ${process.env.PORT}`);
});
