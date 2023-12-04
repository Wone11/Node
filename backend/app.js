const express = require("express");
require("dotenv").config();

const app = express();

app.listen(process.env.PORT, () => {
  console.log(`Food deliver Hosted Server started on port ${process.env.PORT}`);
});
