import React from 'react'
import Common from './common'
import web from '../images/web.jpg'

const Home = () =>{
    return(
    <>
        <Common 
            name="Grow your bussiness with"
            imgsrc = {web}
            visit = "/Service"
            btname = "Get Started"
        />
    </>
    )
}

export default Home;