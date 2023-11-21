const express = require("express");
var bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

async function main() {
    await mongoose.connect(process.env.MONGODB_URI);
  }
  main().catch((err) => console.log(err));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

require("./app/router/router")(app);

app.listen(5000, () => console.log('running on http://localhost:5000'));
