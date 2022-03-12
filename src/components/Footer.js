import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Footer() {
  let { pathname } = useLocation();
  
  return (
    <footer className="footer">
      <div className="footer-links">
        {pathname !== "/" && <Link to="/">Start</Link>}
        <span className="footer-right">
          <Link to="impressum">Impressum</Link>
          {/* <Link to="datenschutz">Privacy Policy</Link> */}
        </span>

        <div></div>
      </div>
    </footer>
  )
}

export default Footer

