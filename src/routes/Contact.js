import React from 'react'
 
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Navbar from '../components/Navbar'
import Form from '../components/Form'


const Contact = () => {
  return (
    <div>
       <Navbar/>
       <HeroImg2 heading="CONTACT" text=" FORM"/>
         <Form/>
       <Footer/>
    </div>
  )
}

export default Contact
