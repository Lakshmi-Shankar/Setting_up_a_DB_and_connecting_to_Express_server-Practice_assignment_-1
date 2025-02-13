const express = require('express');
const { resolve } = require('path');
const Mongoose = require("mongoose")
require("dotenv").config();

const app = express();
const port = 3010;

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});


const MONGO_URI = process.env.MONGO_URI;
Mongoose.connect(MONGO_URI)
.then(() => console.log("MongoDB successfully connected."))
.catch((err) => console.log("Error found:",err))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
