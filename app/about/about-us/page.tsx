import React from 'react'
import cssStyle from "./about-us.module.css"

console.log(cssStyle,"cssStyl");


const AboutUs = () => {
  return (
    <div className={cssStyle.div}>
        <h1 className={cssStyle.h1}>About Us</h1>
        <p className={cssStyle.p}>"Creating beautiful and efficient websites that bring your ideas to life online."</p>
    </div>
  )
}

export default AboutUs;