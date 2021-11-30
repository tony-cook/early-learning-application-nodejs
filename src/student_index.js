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

// ===== Student Profile page informaiton 
app.get('/studentProfile/:id',(req,res) => {
    
    db.query(`select students.name AS student_name, 
    students.email, 
    students.school, 
    students.contact_number, 
    DATE_FORMAT(students.date_of_birth, "%Y %M %D") AS date_of_birth, 
    teachers.name as teachers_name, 
    course from students 
    INNER JOIN teachers 
    JOIN projects ON projects.project_id=? 
    AND teachers.teacher_id=? 
    AND students.student_id=?`, 
    [req.params.id,req.params.id,req.params.id], 
    
    (err,result) => {
        res.send(result);
        console.log(result)
    })
})
// ===== 

// ===== Student Project Builder page grabbing instructions
app.get('/studentProjectBuilder/instructions/:id',(req,res) => {
    
    db.query(`SELECT instructions 
    FROM projects 
    WHERE project_id=?`, [req.params.id],
    
    (err,result) => {
        res.send(result);
    })

})
// ===== 

// ===== Student Project page showing all results 
app.get('/studentProjectBuilder',(req,res) => {
    
    db.query(`SELECT * from projects`, 
    
    (err,result) => {
        res.send(result);
    })

})
// ===== 

app.listen(4000)