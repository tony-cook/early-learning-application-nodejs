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

// ====== Student TEST GRAB ALL
app.get('/students',(req,res) => {
    
    db.query(`SELECT * from students`, 
    
    (err,result) => {
        res.send(result);
        console.log('Result successful')
    })

})
// ======

// ===== Student Profile page informaiton 
app.get('/studentProfile/:id',(req,res) => {
    
    db.query(`select students.name AS student_name, 
    students.email, 
    students.school, 
    students.contact_number, 
    DATE_FORMAT(students.date_of_birth, "%Y %M %D") AS date_of_birth, 
    teachers.name as teachers_name, 
    course from students 
    JOIN teachers 
    JOIN projects 
    ON projects.project_id=? 
    AND teachers.teacher_id=? 
    AND students.student_id=?`, 
    [req.params.id,req.params.id,req.params.id], 
    
    (err,result) => {
        res.send(result);
    })
})
// ===== 

// ===== Student Profile page DOB not formatted 
app.get('/studentProfilePre/:id',(req,res) => {
    
    db.query(`select students.name, 
    students.email, 
    students.school, 
    students.contact_number, 
    students.date_of_birth, 
    teachers.name, course from students 
    JOIN teachers 
    JOIN projects 
    ON projects.project_id=? 
    AND teachers.teacher_id=? 
    AND students.student_id=?`, 
    [req.params.id,req.params.id,req.params.id], 
    
    (err,result) => {
        res.send(result);
    })
})
// ===== 

// ===== Teachers Profile page informaiton 
app.get('/teachersProfile/:id',(req,res) => {
    
    db.query(`SELECT 
    teachers.name, 
    email, 
    DATE_FORMAT(teachers.date_of_birth, "%Y %M %D") AS date_of_birth,
    contact_number,
    school,
    projects.course 
    FROM teachers
    JOIN projects 
    ON teachers.teacher_id=? 
    AND projects.project_id=? `, [req.params.id,req.params.id], 
    
    (err,result) => {
        res.send(result);
    })
})
// ===== 

// ===== Student Project page 
app.get('/studentProject/:id',(req,res) => {
    
    db.query(`SELECT * FROM projects WHERE project_id=?`, [req.params.id], 
    
    (err,result) => {
        res.send(result);
    })

})
// ===== 

// ===== Student Project Builder page 
app.get('/studentProjectBuilder/instructions/:id',(req,res) => {
    
    db.query(`SELECT instructions FROM projects WHERE project_id=?`, [req.params.id],
    
    (err,result) => {
        res.send(result);
    })

})
// ===== 
// ===== Student Project Builder page 
app.get('/studentProjectBuilder',(req,res) => {
    
    db.query(`SELECT * from projects`, 
    
    (err,result) => {
        res.send(result);
    })

})
// ===== 

app.listen(4000)