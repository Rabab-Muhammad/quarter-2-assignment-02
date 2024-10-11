import React from 'react'
import cssStyle from "./contact-us.module.css"

console.log(cssStyle,"cssstyle");


const ContactUs = () => {
  return (
    
    <div className={cssStyle.div}>

        <h1 className={cssStyle.h1}>Contact Us</h1>
        <p className={cssStyle.p}>"Get in touch with us today to start bringing your vision to life—we're here to help!"</p>
    </div>
  )
}

export default ContactUs