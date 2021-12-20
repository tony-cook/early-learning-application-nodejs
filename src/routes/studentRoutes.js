const express = require('express');
const cors = require('cors');
const app = express();
const router = express.Router();
const db = require('../db/db')

app.use(cors())

const handleProjectLibraryStudent = require('../controllers/projectLibraryStudent')

//  route for /student/:studentID/projects with URL query
router.get('/:studentID/projects', cors(), handleProjectLibraryStudent)

module.exports = router;
