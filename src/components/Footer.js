import "./FooterStyles.css"
import React from 'react'
import { FaFacebook, FaHome, FaLinkedinIn, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
       <div className="footer-container">
          <div className="left">
             <div className="location">
                <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}}/>
             </div>
             <div>
              <p> Motihari,Bihar,Patna</p>
              <p>India</p>
             </div>
             <div>
               <div className="phone">
              <h4> <FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/>
              123-234-453</h4>
               </div>

               <div className="email">
              <h4> <FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/>
              adarshsingh458868@gmaill.com</h4>
               </div>

             </div>
             </div>
            <div className="right">
              <h4>About the company</h4>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor sit amet.</p>
              <div className="social">
              <FaFacebook size={20} style={{color:"#fff", marginRight:"2rem"}}/>
              <FaTwitter size={20} style={{color:"#fff", marginRight:"2rem"}}/>
              <FaLinkedinIn size={20} style={{color:"#fff", marginRight:"2rem"}}/>

              </div>
            </div>
          </div>
       </div>
      
     
  )
}

export default Footer
