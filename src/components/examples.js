import React from 'react'
import viergewinnt from '../assets/viergewinnt.jpg'
import kaizik from '../assets/kaizik.jpg'
import slp from '../assets/slp.jpg'
import { FaArrowCircleRight } from 'react-icons/fa'

const Examples = () => (
  <div className="examples-block">
      <div className="examples-content-block">
        {/* <h3>Work examples</h3> */}
        {/* <hr /> */}
        <div className="example-links">
          <div className="workexample" style={{backgroundImage: "url(" + kaizik + ")"}}>
          <a href="http://www.kaizik.de" target="_blank">
              <div className="grey-filter">
                <div className="filter-text">
                  <h3>Wingman - Christian Kaizik</h3>
                  <div className="arrow"><FaArrowCircleRight /></div>
                </div>
              </div>
            </a>
          </div>
          <div className="workexample" style={{backgroundImage: "url(" + viergewinnt + ")"}}>
            <a href="https://zahnstochermann.github.io/vier-gewinnt-deluxe/" target="_blank">
              <div className="grey-filter">
                <div className="filter-text">
                  <h3>Vier gewinnt deluxe</h3>
                  <div className="arrow"><FaArrowCircleRight /></div>
                </div>
              </div>
            </a>
          </div>
          <div className="workexample" style={{backgroundImage: "url(" + slp + ")"}}>
          <a href="http://www.showloveproject.de/" target="_blank">
              <div className="grey-filter">
                <div className="filter-text">
                  <h3>Show Love Project</h3>
                  <div className="arrow"><FaArrowCircleRight /></div>
                </div>
              </div>
            </a>
          </div>
        </div>
        {/* <iframe src="https://zahnstochermann.github.io/vier-gewinnt-deluxe/"></iframe> */}
      </div>
      {/* <div>
        ISS Position:
        {getIssPosition()}
      </div> */}
    </div>
)

export default Examples
