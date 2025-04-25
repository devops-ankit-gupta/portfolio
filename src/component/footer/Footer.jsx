import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer_container container">
            <h1 className="footer_title">Ankit Kumar Gupta</h1>
            <ul className="footer_list">
                <li>
                    <a href="#about" className="footer_link">About</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer_link">Projects</a>
                </li>
            </ul>

            <div className="footer_social">
                <a href="https://www.facebook.com/ankit.gupta.mzp1" className="footer_social-link" target="_blank">
                    <i class="bx bxl-facebook"></i>
                </a>
                <a href="https://www.instagram.com/_devil_tom_" className="footer_social-link" target="_blank">
                    <i class="bx bxl-instagram"></i>
                </a>
                <a href="https://twitter.com/ankitmzp1gupta" className="footer_social-link" target="_blank">
                    <i class="bx bxl-twitter"></i>
                </a>
            </div>

            <span className="footer_copy">Copyrights &#169; 2025 Ankit Kumar Gupta,<br /> All rights reserved.</span>
        </div>
    </footer>   
  )
}

export default Footer