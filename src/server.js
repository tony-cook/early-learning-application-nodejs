const express = require('express');
const mysql =require('mysql2');
const app = express();
const dotenv = require("dotenv").config({path: __dirname + '/.env'});

const teacherRoutes = require('./routes/teacherRoutes');
const studentRoutes = require('./routes/studentRoutes');
const serverTest = require('./utils/connections');


app.use('/teacher', teacherRoutes);
app.use('/student', studentRoutes);

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

app.listen(4000,serverTest)