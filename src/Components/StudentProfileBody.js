import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import './CSS/StudentProfileBody.css'

export default function StudentProfileHeader() {

    const studentID = 2 //====== SET STUDENT ID HERE
    const studentPofile = `http://localhost:4000/studentProfile/${studentID}`
    
    const [contactNumber, setContactNumber] = useState('Contact Number')
    const [date_of_birth, setDate_of_birth] = useState('Date of Birth')
    const [course, setCourse] = useState('Course')
    const [email, setEmail] = useState('Student Email')
    const [school, setSchool] = useState('School')
    const [teacher, setTeacher] = useState('Teacher')
    const [student, setStudent] = useState('Student')

    axios.get(studentPofile)
    .then(res => {
        // console.log(res);
        setContactNumber(res.data[0].contact_number);
        setDate_of_birth(res.data[0].date_of_birth)
        setCourse(res.data[0].course)
        setEmail(res.data[0].email)
        setSchool(res.data[0].school)
        setTeacher(res.data[0].teachers_name)
        setStudent(res.data[0].student_name)
    })

    return (
        <div>
            <div className='middle'>
                <div className='main'>
                    <div className='main-box'>

                        <div className='main-left'>
                            <img src="./Images/Student Areas/Ellipse 38.png" /><br/>
                            <button><a href=''>EDIT PROFILE</a></button>
                            <button><a href=''>CHANGE PHOTO</a></button>
                        </div>

                        <div className='main-right'>
                            <h2 className='studentName'>{student}</h2>
                            <span className='info'>
                            <span className="left">School</span>
                            <span className="right">{school}</span>
                            </span>
                            <span className='info'>
                            <span className="left">Teacher</span>
                            <span className="right">{teacher}</span>
                            </span>
                            <span className='info'>
                            <span className="left">Course</span>
                            <span className="right">{course}</span>
                            </span>
                            <span className='info'>
                            <span className="left">Date of Birth</span>
                            <span className="right">{date_of_birth}</span>
                            </span>
                            <span className='info'>
                            <span className="left">Contact No</span>
                            <span className="right">{contactNumber}</span>
                            </span>
                            <span className='info'>
                            <span className="left">Email Address</span>
                            <span className="right">{email}</span>
                            </span>
                        </div>
                    </div>

                    <div className='main-footer'>
                        <button><a href=''>BACK TO PROJECTS</a></button>
                    </div>
                </div>
            </div>  
        </div>
        
    )
}
