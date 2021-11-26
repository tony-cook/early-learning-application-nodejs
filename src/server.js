const express = require('express');
const mysql =require('mysql2')
const cors = require('cors')
const app = express()


const teacherRoutes = require('./routes/teacherRoutes')
const db = require('./db/db')


app.use(cors());
app.use(express.json());

app.use('/', teacherRoutes);



db.connect((err) => {
    if(err) {
        console.log(err)
    } else {
        console.log('Database connected successfully')
    }
})

app.listen(4000, () => {console.log('Server is running')})