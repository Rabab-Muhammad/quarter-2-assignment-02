import Link from 'next/link';
import React from 'react'
import cssStyle from './Hero.module.css'

console.log(cssStyle,"cssStyle");


const Hero = () => {
  return (
    <div className={cssStyle.div}>
        <h2 className={cssStyle.h2}>Crafting Beautiful Websites</h2>
        <p className={cssStyle.p}>We build fast, modern, and responsive web solutions.</p>
        <button className={cssStyle.button}>
        <Link href="mailto:rababmuhammadhussain@gmail.com" style={{color:"white",textDecoration:"none"}}>Contact Us</Link>
        </button>
    </div>
  )
}

export default Hero;