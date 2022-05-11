import React from 'react'
import Project from '../components/Project'
import data from '../data/projects_data';

const Portfolio = () => {

  const renderProjects = () => {
    let projects = [];
    data.projects.forEach((project) => {
      projects.push(
        <Project key={project.id}
          data={project}
        ></Project>)
    })
    return projects
  }

  return (
    <div className="portfolio" id="portfolio">
      <h2>Things I built</h2>
      {/* <p>A selection of projects I worked on for companies or private, ongoing projects.</p>
        <br />
        <br /> */}
      {renderProjects()}
    </div>
  )
}

export default Portfolio