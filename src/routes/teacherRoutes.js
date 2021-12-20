const express = require('express');
const cors = require('cors');
const app = express();
const router = express.Router();
const db = require('../db/db')

app.use(cors())

const handleProjectLibrary = require('../controllers/projectsLibrary')

//  route for /teacher/:teacherID/projects with URL query
router.get('/:teacherID/projects', cors(), handleProjectLibrary)

module.exports = router;
