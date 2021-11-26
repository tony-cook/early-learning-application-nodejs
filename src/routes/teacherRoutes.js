const express = require('express');
const db = require('../db/db')
const router = express.Router();



//  route for /teacher/:teacherID/projects

router.get('/teacher/:teacherID/projects', (req, res) => {
    let user = req.params.teacherID
    console.log(req)
    db.query('SELECT profile_pic, name FROM teachers WHERE teacher_id = ?',
            [user], 
            (err,result) => {
                res.send(result)
            })
})

module.exports = router;
