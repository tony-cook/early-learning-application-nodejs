import React from 'react'
import './CSS/StudentProjectBody.css'
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function StudentProjectBody() {


    const students = 'http://localhost:4000/students'

    // Axios Test Data.
    axios.get(students)
    .then(res => {
      console.log('HIT HIT HIT');
      console.log(res.data[0].name);
    })

    return (
        <div className='body-box-body'>
            <div className='left'>
            <div className='middle-left'>
                    <div className='profile-picture'>
                        <img src='Images/Student Areas/Ellipse 38.png' />
                    </div>

                    <div className='nav-links'>
                        <div className='links' onclick="learningObjectives()"><a href="#"><img src='Images/Student Areas/objectives.png'/>LEARNING OBJECTIVES</a></div>
                        <div className='links' onclick="instructions()"><a href="#"><img src='Images/Student Areas/steps.png'/>INSTRUCTIONS</a></div>
                        <div className='links' onclick="videoTutorial()"><a href="#"><img src='Images/Student Areas/video.png'/>VIDEO TUTORIAL</a></div>
                        <div className='links' onclick="makeProject()"><a href="#"><img src='Images/Student Areas/new proj.png'/>MAKE PROJECT</a></div>
                        <div className='links' onclick="submitProject()"><a href="#"><img src='Images/Student Areas/submit proj.png'/>SUBMIT PROJECT</a></div>
                        <div className='links'><a href="#"><img src='Images/Student Areas/prize.png'/>BONUS CHALLENGE</a></div>
                        <div className='links'><a href="#"><img src='Images/Student Areas/list copy.png'/>TAKE THE QUIZ</a></div>
                        
                    </div>

                    <div className='arrow-box'>
                        <div className='arrow'><a href="#"><img src='Images/Student Areas/Icon open-caret-left.png'/></a></div>
                    </div>


                    <div className='bottom-nav'>
                        <div className='bottom-nav-link'><a href="#"><img src='Images/Student Areas/Icon awesome-user-circle.png' /><br />Profile</a></div>
                        <div className='bottom-nav-link'><a href="#"><img src='Images/Student Areas/Icon material-settings.png' /><br />Settings</a></div>
                        <div className='bottom-nav-link'><a href="#"><img src='Images/Student Areas/Icon awesome-sign-out-alt.png' /><br />Log out</a></div>
                    </div>
                </div>
            </div>
                <div className='middle-right'>

                    <div className='middle-right-box'>
                        
                        <div className='middle-content-box'>
                            Middle content
                        </div>

                    </div>

                </div>
            
        </div>
    )
}
