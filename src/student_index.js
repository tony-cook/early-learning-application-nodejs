const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config();
const mysql = require('mysql');

const app = express()

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DATABASE
})

db.connect((err) => {
    if(err){
        console.log(err)
    } else {
        console.log('connected successfully. . . ')
    }
})

app.listen(4000)