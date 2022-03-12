import React from 'react'

class Project extends React.Component {
  
  render(){
    return (
      <div className="project-list__project">
        <a href={this.props.link} target="_blank" rel="noreferrer">{this.props.linkname}</a>
        <span>{this.props.description}</span>
      </div>
    )
  } 
}

export default Project
