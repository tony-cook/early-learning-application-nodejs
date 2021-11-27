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

    const query5 = req.query.CSC
    const query6 = req.query.MAT
    const query7 = req.query.SCI
    const query8 = req.query.LAN
    const query9 = req.query.ART
    const query10 = req.query.MUS

    const query11 = req.query.course
    const query12 = req.query.showMax
    
// Defining variables for DB queries: 
    const subscription = query1
    const activityType = query2
    const yearLevelMin = Math.min(...query3)
    const yearLevelMax = Math.max(...query4)

    const subjectCsc = query5
    const subjectMath = query6
    const subjectSci = query7
    const subjectLang = query8
    const subjectArt = query9
    const subjectMusic = query10

    const courseLevel = query11
    const showMaxResults = query12

    console.log(showMaxResults)
// DB query for the filtered list to render in the project gallery

    db.query(
            `SELECT project_pic, name, activity_type, course 
            FROM projects 
            WHERE subscription IN (?) 
            AND activity_type IN (?) 
            AND year BETWEEN ? AND ?  
            AND (
            subjects_shortcode LIKE ?
            OR subjects_shortcode LIKE ?
            OR subjects_shortcode LIKE ?
            OR subjects_shortcode LIKE ?
            OR subjects_shortcode LIKE ?
            OR subjects_shortcode LIKE ?
            )
            AND course IN (?) 
            LIMIT ${showMaxResults}`,
            [subscription, activityType, yearLevelMin, yearLevelMax, subjectCsc, subjectMath, subjectSci, subjectLang, subjectArt, subjectMusic, courseLevel], 
            (err,result) => {
                res.send(result)
            })

// DB query for teacher profile information to render in the navbar
    // db.query('SELECT profile_pic, name, school, date_of_birth, contact_number, email FROM teachers WHERE teacher_id = ?',
    //         [userId], 
    //         (err,result) => {
    //             res.send(result)
    //         })

})



module.exports = router;
