const express = require("express");
const mongoose = require("mongoose");
const app = express();
const admin = require('./routes/admin')
const agent = require('./routes/agent')
const customer = require('./routes/customer')
const auth = require('./routes/auth')
const cors = require('cors')  
require('dotenv').config()

const port = process.env.PORT;

app.use(express.json());
app.use(cors())

app.use('/admin', admin)
app.use('/agent', agent)
app.use('/customer', customer)
app.use('/auth', auth)

mongoose
    .connect(process.env.DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("connect to database");
    })
    .catch((error) => {
      console.log(error);
    });

app.listen(process.env.PORT, () => {
  console.log('connect to server ', process.env.PORT);
});


