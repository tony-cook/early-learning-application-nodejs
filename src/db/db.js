const express = require('express');
const mysql =require('mysql2');
const dotenv = require("dotenv").config();

const db = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DATABASE
    });
    console.log("Database connected successfully");


module.exports = db;