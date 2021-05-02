// Dependencies
const fs = require('fs');
const express = require('express');
const path = require('path');
const router = require('express').Router();


const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

// Sets an initial port.
const PORT = process.env.PORT || 3000;

//sets up express app to handle data parsing
app.use(express.urlencoded({ extended: true }));

//parse incoming JSON data
app.use(express.json());
app.use(express.static("public"));

//require routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);



