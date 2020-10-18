import React from 'react'
import Common from "./common"
import web from '../images/software.jpg'
const About = () =>{
    return(
    <>
        <Common 
            name="Welcome to About Page"
            imgsrc = {web}
            visit = "/contact"
            btname = "Contact Now"
        />
    </>
    )
}

export default About;