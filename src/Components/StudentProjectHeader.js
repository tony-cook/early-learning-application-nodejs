import React from 'react'
import {Link} from 'react-router-dom'
import './CSS/StudentProjectHeader.css'

export default function StudentProjectHeader() {
    return (
        <div className='project-header'>
            <div className='header-one'>
                    <Link to='/'><a href='#'><img src='Images/Student Areas/levelUpLogo.png' /></a></Link>
                </div>
                <div className='header-two'>
                    <div className='header-box-left'>

                    </div>
                    <div className='header-box-right'>
                        <a href="#" className="top-link-one">Take Screenshot</a>
                        <a href="#" className="top-link-two">Ask Teacher for help</a>
                        <a href="#" className="top-link-three">More Projects</a>
                    </div>    
                </div>


                <div className='header-three'>
                    <img src='Images/Home/Maori flag.png'/>
                    <img src='Images/Home/NZ Flag.png'/>
                </div>
        </div>
    )
}
