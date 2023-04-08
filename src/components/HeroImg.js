import "./HeroImgStyles.css"
import React from 'react'
import { Link } from "react-router-dom"
// import singh1 from "../assets/singh.webp"

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
         <img  classname="into-img" src= "" alt="" />
      </div>
      <div className="content">
        <p>  CALL ME  SINGHCR7</p>
        <h1>React Developer</h1>
        <div>
          <Link to="/project" className="btn">Projects</Link>
          <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
      </div>
      
    </div>
  )
}

export default HeroImg
