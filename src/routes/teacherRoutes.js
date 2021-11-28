const express = require('express');
const router = express.Router();

const handleProjectLibrary = require('../controllers/projectsLibrary')

//  route for /teacher/:teacherID/projects with URL query
router.get('/teacher/:teacherID/projects', handleProjectLibrary)

module.exports = router;
