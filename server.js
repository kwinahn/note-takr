// dependencies
const express = require('express');
const fs = require('fs');
const path = require('path');
const router = require('express').Router();

const app = express();

const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

//sets an initial port.
const PORT = process.env.PORT || 3000;

//sets up express app to handle data parsing
app.use(express.urlencoded({ extended: true }));

//parse incoming JSON data
app.use(express.json());
app.use(express.static("public"));

//require routes
app.use('/', htmlRoutes);
app.use('/api', apiRoutes);


app.listen(PORT, () => {
  console.log(`App is running on PORT: ${PORT}`)
});



