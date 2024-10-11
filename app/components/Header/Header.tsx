import Link from 'next/link'
import React from 'react'
import cssStyle from "./Header.module.css"

console.log(cssStyle,"cssStyle");


const Header = () => {
  return (
    <div>
        <nav>
            <h1>My NextJs website</h1>
            <ul className={cssStyle.a}>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
                <li>
                    <Link href="/services">Services</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Header