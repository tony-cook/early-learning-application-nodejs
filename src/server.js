const express = require('express');
const mysql =require('mysql2');
const app = express();
const dotenv = require("dotenv").config({path: __dirname + '/.env'});

const teacherRoutes = require('./routes/teacherRoutes');
const studentRoutes = require('./routes/studentRoutes');
const serverTest = require('./utils/connections');


app.use('/teacher', teacherRoutes);
app.use('/student', studentRoutes);


app.listen(4000,serverTest)