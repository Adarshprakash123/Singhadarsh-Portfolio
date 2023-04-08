import "./AboutContentStyles.css"
import { Link } from "react-router-dom"
import pro2 from "../assets/download.png"

import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>  WHO AM I</h1>
        <p>It's not a bug; <br></br>it's an undocumented feature. ... </p>
      
      <Link to="/contact">
        <button className="btn">Contact</button>
      </Link>
      </div>
      <div className="right">
        <div className="img-container">
            <div className="img-stack top">
              <img src={pro2}  className="img" width="220px" height="230px"/>
            </div>

            <div className="img-stack bottom">
              <img src={pro2}  className="img" width="220px" height="230px"/>
            </div>
        </div>
      </div>
      
    </div>
  )
}

export default AboutContent
