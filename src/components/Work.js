import "./WorkCardStyles.css"
import { NavLink } from "react-router-dom"
import Workcard from "./WorkCard" 
import WorkCardData from "./WorkCardData"

import React from 'react'

const Work = () => {
  return (
    <div className="work-container">
       <h1 className="project-heading">Projects</h1>
       <div className="project-container">
         {WorkCardData.map((val,ind)=>{
            return(
                <Workcard
                key={ind}
                imgsrc={val.ingsrc}
                title={val.title}
                text={val.text}
                view={val.view}
                />
            )
         })}
           
       </div>
      
    </div>
  )
}

export default Work
