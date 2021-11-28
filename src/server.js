const express = require('express');
const mysql =require('mysql2');
const app = express();
const dotenv = require("dotenv").config({path: __dirname + '/.env'});

const teacherRoutes = require('./routes/teacherRoutes');
const db = require('./db/db');
const connections = require('./utils/connections');


app.use('/', teacherRoutes);




db.connect(connections.dbTest)

app.listen(4000,connections.serverTest)