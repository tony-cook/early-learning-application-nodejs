const express = require('express');
const db = require('../db/db')
const router = express.Router();



//  route for /teacher/:teacherID/projects

router.get('/teacher/:teacherID/projects', (req, res) => {

    const user = req.params.teacherID

    const query1 = req.query.subscription
    const query2 = req.query.activity_type
    const query3 = req.query.year
    const query4 = req.query.subject

// Handling the request prior to MySQL query and response.
// 1. Convert the query to an array if it is a string
// 2. Loop to create an array with a consistent length for the SQL query

    const subscription = []
    const activityType = []
    const yearLevel = []
    const subject = []

    // Subscription type

        if (typeof query1 === "string") {
            subscription.push(query1)
            subscription.push("")
        }

        if (typeof query1 === "object") {
            for(i =0; i <= 1;i++) {
                subscription.push(query1[i])
            }
        }

    // Activity type

        if (typeof query2 === "string") {
            activityType.push(query2)

            for(i=0; i <= 3;i++) {
                if(activityType[i] === undefined){
                    activityType[i] = ""
                }
            }
        }

        if (typeof query2 === "object") {
            for(i =0; i <= 3;i++) {
                activityType.push(query2[i])
                if (activityType[i] === undefined){
                    activityType[i] = ""
                }
            }
        }

    // Year Level

            if (typeof query3 === "string") {
                yearLevel.push(query3)
    
                for(i=0; i <= 3;i++) {
                    if(yearLevel[i] === undefined){
                        yearLevel[i] = ""
                    }
                }
            }
    
            if (typeof query3 === "object") {
                for(i =0; i <= 3;i++) {
                    yearLevel.push(query3[i])
                    if (yearLevel[i] === undefined){
                        yearLevel[i] = ""
                    }
                }
            }

    // Subject Matter

            if (typeof query4 === "string") {
                subject.push(query4)
    
                for(i=0; i <= 5;i++) {
                    if(subject[i] === undefined){
                        subject[i] = ""
                    }
                }
            }
    
            if (typeof query4 === "object") {
                for(i =0; i <= 5;i++) {
                    subject.push(query4[i])
                    if (subject[i] === undefined){
                        subject[i] = ""
                    }
                }
            }


console.log(subject)


    db.query('SELECT profile_pic, name FROM teachers WHERE teacher_id = ?',
            [user], 
            (err,result) => {
                res.send(result)
            })


})


module.exports = router;
