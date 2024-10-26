import React from 'react'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Footer from '../components/Footer/Footer'
import cssStyle from "./contact.module.css"
import Link from 'next/link'

const ContactPage = () => {
  return (
    <div>
      <Header></Header>
        <h1 className={cssStyle.contact_h1}>Welcome to Contact page</h1>
        <button className={cssStyle.button}>
        <Link href="#" className={cssStyle.a}>Contact Us </Link>
        </button>
        <Hero></Hero>
        <Footer></Footer>
    </div>
  )
}

export default ContactPage