import React from 'react'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Footer from '../components/Footer/Footer'
import cssStyle from "./about.module.css"
import Link from 'next/link'



console.log(cssStyle,"cssStyle");


const AboutPage = () => {
  return (
    <div>
      <Header></Header>
        <h1 className={cssStyle.about_h1}>Welcome to About page</h1>
        <button className={cssStyle.button}>
    <Link href="./about/about-us" className={cssStyle.a}>About Us </Link>
    </button>
      <Hero></Hero>
      <Footer></Footer>
    </div>
  )
}

export default AboutPage