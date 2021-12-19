const express = require('express');
const mysql =require('mysql2');
const app = express();
const dotenv = require("dotenv").config({path: __dirname + '/.env'});

const serverTest = require('./utils/connections');

const studentRoutes = require('./routes/studentRoutes');

app.use('/student/:studentID', studentRoutes);

app.listen(4000,serverTest)