import React from 'react'
import cssStyle from './web.module.css'

console.log(cssStyle,"cssStyle");


const WebDevelopment = () => {
  return (
    <div className={cssStyle.div}>
        <h1 className={cssStyle.h1}>Web-Development</h1>
        <p className={cssStyle.p}>Creating fast, easy-to-use, and visually appealing websites.</p>
    </div>
  )
}

export default WebDevelopment