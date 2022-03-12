import React from 'react'
import Header from '../components/Header';

// import Header from '../components/header'
import Project from '../components/project_old'
import Portfolio from './Portfolio'
// import { FaArrowCircleRight } from 'react-icons/fa'

const Home = () => (
  <>
    <Header />
    <section className="section section--projects">
      <Portfolio />
      <div className="portfolio" id="fun_projects">
        <h2>Small projects for fun</h2>
        <div className="project-list">
          <Project 
            link="https://tonetool.netlify.com/"
            linkname="Tonetool"
            description=" - Sine-Generator, useful for audiometry (test your hearing or covering tinnitus), sound tests or simply to create annoying sounds."
          />
          <Project 
            link="https://slot-machine.netlify.com/"
            linkname="Sloth Machine"
            description=" - Very simple Slot Machine / Bandit with sloths and other animal pictures as a price. Bot and statistics included."
          />
          <Project 
            link="https://game-of-life-in-react.netlify.app/"
            linkname="Conway's Game of Life"
            description=" - An implementation of Conway's 'Game of Life' in React."
          />
        </div>
        <br />
        <br />
        {/* <h2>Websites</h2> */}
        {/* <div className="project-list">
          <Project 
            link="http://www.kaizik.de"
            linkname="www.kaizik.de"
            description=" - Marketing Wingman Christian Kaizik"
          />
          <Project 
            link="http://www.showloveproject.de"
            linkname="www.showloveproject.de"
            description=" - SLP: Show Love Project - Acoustic Regg-Hop Band from Hamburg."
          />
        </div> */}
      </div>
    </section>
  </>
)
export default Home;