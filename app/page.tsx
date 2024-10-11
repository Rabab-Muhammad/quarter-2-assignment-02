import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import cssStyle from "./page.module.css";

console.log(cssStyle,"cssStyle");

const HomePage = () => {
  return(
    <div>
      <Header></Header>
      <h1 className={cssStyle.h1}>Welcome to Home page</h1>
      <Hero></Hero>
      <Footer></Footer>
    </div>
  )
}
export default HomePage;
