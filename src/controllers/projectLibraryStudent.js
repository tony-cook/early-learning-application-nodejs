const db = require('../db/db')

// Function to handle Student Project Library endpoint requests

const handleProjectLibrary = (req, res) => {

// Variables defined from dynamic route:
        const userId = req.params.studentID

// Variable to store the response object (response object)
        const responseData = []
    
// Variables defined from URL query parameters (request)
        const userQuery = req.query

// Defining variables for DB queries: 
 
        const subscription = userQuery.subscription ? userQuery.subscription : ["free","premium"]
        const activityType = userQuery.activity_type ? userQuery.activity_type : ["animation","game","chatbot","augmentedreality"]
        const yearLevelMin = userQuery.yearMin ? Math.min(...userQuery.yearMin) : 1
        const yearLevelMax = userQuery.yearMax ? Math.max(...userQuery.yearMax) : 99

        const subjectCsc = userQuery.CSC
        const subjectMath = userQuery.MAT
        const subjectSci = userQuery.SCI
        const subjectLang = userQuery.LAN
        const subjectArt = userQuery.ART
        const subjectMusic = userQuery.MUS

        const subjects = [subjectCsc,subjectMath,subjectSci,subjectLang,subjectArt,subjectMusic]

        const courseLevel = userQuery.course
        const showMaxResults = userQuery.showMax

// DB query for the filtered list to render in the project gallery
// Also has nested DB query for teacher name and student profile_pic, finally sending the response object
    
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
                        if(err) {
                                console.log(err)
                                res.sendStatus(400);
                        } else {
                                responseData.push(result)
                                db.query(`SELECT profile_pic, name 
                                        FROM students 
                                        WHERE student_id = ?`,
                                [userId],(err,result) => {
                                        if(err) {
                                                console.log(err)
                                                res.sendStatus(400);   
                                        } else {      
                                                responseData.push(result)
                                                res.send(responseData)
                                        }
                                })  
                        }
                })
}


module.exports = handleProjectLibrary