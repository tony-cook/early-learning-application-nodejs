const express = require('express');
const cors = require('cors');
const app = express();
const router = express.Router();
const db = require('../db/db')

app.use(cors())


//  route for /student/:studentID/projects with URL query
router.get('/projects', cors(), handleProjectLibraryStudent)

module.exports = router;
