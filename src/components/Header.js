import React from 'react'
// import { FaXing, FaLinkedin, FaGithub, FaEnvelope, FaArrowCircleDown } from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faXing } from "@fortawesome/free-brands-svg-icons"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faCircleArrowDown, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import header1 from '../assets/images/header-1.jpg'
import header2 from '../assets/images/header-2.jpg'

const Header = () => {

  const randomHeaderImg = () => {
    const images = [header1, header2];
    const selectedImage = images[Math.floor(Math.random() * images.length)];
    // return(<span className={myclass} key={key}>{letter}</span>)
    return selectedImage
  }

  const scrollDown = () => {
    var elmnt = document.getElementById("portfolio");
    elmnt.scrollIntoView();
    // scroll(0, window.innerHeight);
  }

  return (
    <header className="header-block" style={{ backgroundImage: `url(${randomHeaderImg()})` }} >
      <h1>
        <span>Jan Deters</span>
      </h1>
      <h4>UX Designer | Frontend Engineer</h4>

      <div className="header-links">
        <a href="https://www.xing.com/profile/Jan_Deters2" target="_blank noopener norefferer">
          <FontAwesomeIcon icon={faXing} />
        </a>
        <a href="https://www.linkedin.com/in/jan-deters-721480a4/" target="_blank noopener norefferer">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a href="https://github.com/Zahnstochermann" target="_blank noopener norefferer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="mailto:info@jandeters.de">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>

      <div className="header__scrolldown" onClick={() => scrollDown()}>
        <FontAwesomeIcon icon={faCircleArrowDown} />
      </div>
    </header>
  )

}

export default Header
