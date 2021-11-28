const express = require('express');
const mysql =require('mysql2');
const app = express();
const dotenv = require("dotenv").config({path: __dirname + '/.env'});

const teacherRoutes = require('./routes/teacherRoutes');
const db = require('./db/db');
const dbTest = require('./utils/dbTest');
const serverTest = require('./utils/serverTest');


app.use('/', teacherRoutes);




db.connect(dbTest)

app.listen(4000,serverTest)