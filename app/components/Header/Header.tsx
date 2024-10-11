import Link from 'next/link'
import React from 'react'
import cssStyle from "./Header.module.css"

console.log(cssStyle,"cssStyle");


const Header = () => {
  return (
    <div >
        <nav>
            <h1>My NextJs website</h1>
            <ul>
                <li>
                    <Link href="/" className={cssStyle.link}>Home</Link>
                </li>
                <li>
                    <Link href="/about" className={cssStyle.link}>About</Link>
                </li>
                <li>
                    <Link href="/contact" className={cssStyle.link}>Contact</Link>
                </li>
                <li>
                    <Link href="/services" className={cssStyle.link}>Services</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Header