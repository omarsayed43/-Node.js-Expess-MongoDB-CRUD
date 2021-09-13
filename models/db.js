const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));

// Connect to MongoDB
mongoose
  .connect(
    'mongodb://omar:HWLZMaxu6PdhZ5xw@mongodb_mongo_1:27017/omar',
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

const port = 3000;
require('./employee.model');
