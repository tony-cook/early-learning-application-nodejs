import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './CSS/StudentProfileHeader.css'
import axios from 'axios'

export default function StudentProfileHeader() {

    const studentID = 2 //====== SET STUDENT ID HERE
    const studentPofile = `http://localhost:4000/studentProfile/${studentID}`
    
    const [student, setStudent] = useState('Student')

    axios.get(studentPofile)
    .then(res => {
        // console.log(res);
        
        setStudent(res.data[0].student_name)
    })

    return (
            <div className='top'>
                <div className='header'>
                    
                    <div className='header-box-one'>
                        <Link to='/StudentProject'><img src="./Images/Home/Star Logo 07-2.png" /></Link>
                    </div>

                    <div className='header-box-two'>
                        <a href="#" onmousedown="click()" onclick="click()">HOME</a>
                        <a href="#">PROJECTS</a>
                        <a href="#">TEACHERS</a>
                    </div>

                    <div className='header-box-three'>
                        <div className='holder'>

                            <div className='flags'>
                                LANG <img src="./Images/Home/NZ Flag.png" /> <img src="./Images/Home/Maori flag.png" />
                            </div>

                            <div className='header-profile-box'>
                                
                                <span className='profileStudentName'>{student}</span>
                                <img src="./Images/Student Areas/Ellipse 38.png" className='smallProfile' />
                            </div>

                        </div>

                    </div>
                    
                </div>
            </div>
        
    )
}
