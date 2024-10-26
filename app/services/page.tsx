import React from 'react'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Footer from '../components/Footer/Footer'
import cssStyle from "./services.module.css"
import Link from 'next/link'

const ServicesPage = () => {
  return (
    <div>
      <Header></Header>
        <h1 className={cssStyle.services_h1}> Welcome to Services page</h1>
        <button className={cssStyle.button}>
        <Link href="#"className={cssStyle.a}>Web-Development </Link>
        </button>
        <Hero></Hero>
        <Footer></Footer>
    </div>
  )
}

export default ServicesPage