const express = require('express');
const db = require('../db/db')
const router = express.Router();



//  route for /teacher/:teacherID/projects

router.get('/teacher/:teacherID/projects', (req, res) => {

// Variables defined from dynamic route:
    const userId = req.params.teacherID

// Variables defined from URL query parameters:
    const query1 = req.query.subscription
    const query2 = req.query.activity_type
    const query3 = req.query.yearMin
    const query4 = req.query.yearMax
    const query5 = req.query.subject
    const query6 = req.query.course
    const query7 = req.query.showmax
    
// Defining variables for DB queries: 
    const subscription = query1
    const activityType = query2
    const yearLevelMin = Math.min(...query3)
    const yearLevelMax = Math.max(...query4)
    const subject = query5
    const courseLevel = query6
    const showMaxResults = query7

// DB query for the filtered list to render in the project gallery

// *** NEEDS SUBJECT QUERY ADDED IN TO DB QUERY ***
    db.query(`SELECT project_pic, name, activity_type, course 
            FROM projects WHERE subscription IN (?) 
            AND activity_type IN (?) 
            AND year BETWEEN ? AND ? 
            AND course IN (?) LIMIT ?`,
            [subscription, activityType, yearLevelMin, yearLevelMax,courseLevel,showMaxResults], 
            (err,result) => {
                res.send(result)
            })

// DB query for teacher profile information to render in the navbar
    db.query('SELECT profile_pic, name, school, date_of_birth, contact_number, email FROM teachers WHERE teacher_id = ?',
            [userId], 
            (err,result) => {
                res.send(result)
            })

})



module.exports = router;
