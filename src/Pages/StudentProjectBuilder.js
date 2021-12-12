import React from 'react'
import '../Components/CSS/body.css'
import StudentProjectHeader from '../Components/StudentProjectHeader'
import StudentProjectBody from '../Components/StudentProjectBody'
import StudentProjectFooter from '../Components/StudentProjectFooter'

export default function StudentProjectBuilder() {
    return (

        <div className='holder-box'>
            <StudentProjectHeader />
            <StudentProjectBody />
            <StudentProjectFooter />
        </div>
        
    )
}
