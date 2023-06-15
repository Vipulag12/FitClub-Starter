import React from 'react'
import "./Footer.css"
import Github from "../../assets/github.png"
import Instagram from "../../assets/instagram.png"
import LinkedIn from "../../assets/linkedin.png"
import Logo from "../../assets/logo.png"
export default function Footer() {
  return (
    <div className="footer-container">
        <hr />
        <div className="footer">
            <div className="social-links">
              <a target="/" href=""><img  src={Github} alt="" /></a>
            <a target="/" href=""><img src={Instagram} alt="" /></a>
            <a target="/" href=""><img src={LinkedIn} alt="" /></a>
            
            
            </div>
        <div className="logo-f">
            <img src={Logo} alt="" />
        </div>
        </div>
        <div className="blur blur-f-1"></div>
        <div className="blur blur-f-2"></div>
    </div>
  )
}
