import Link from 'next/link'
import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import cssStyle from "./Footer.module.css"

function Footer() {
  return (
    <footer>
        <p>&#169; 2024 My website.All rights reserved</p>
        <div>
            <Link href="https://github.com/Rabab-Muhammad" target="_blank" rel="noopener noreferrer"className={cssStyle.github}>
            <FaGithub size={24}  />
            </Link>
            <Link href="https://linkedin.com/in/rabab-muhammad-35913b1b8" target="_blank" rel="noopener noreferrer"className={cssStyle.linkedin}>
            <FaLinkedin size={24}  />
            </Link>
        </div>
    </footer>
  )
}

export default Footer