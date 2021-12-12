import React from 'react'
import StudentProfileHeader from '../Components/StudentProfileHeader'
import StudentProfileBody from '../Components/StudentProfileBody'
import StudentProfileFooter from '../Components/StudentProfileFooter'
import '../Components/CSS/body.css'

export default function StudentProfile() {
    return (
        <div className='holder-box'>
            <StudentProfileHeader />
            <StudentProfileBody />
            <StudentProfileFooter />
        </div>
    )
}
