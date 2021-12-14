const express = require('express');
const mysql =require('mysql2');
const app = express();
const dotenv = require("dotenv").config({path: __dirname + '/.env'});

const teacherRoutes = require('./routes/teacherRoutes');
const serverTest = require('./utils/connections');


app.use('/', teacherRoutes);


app.listen(4000,serverTest)