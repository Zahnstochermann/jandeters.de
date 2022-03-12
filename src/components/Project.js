import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Link } from 'react-router-dom'

const Project = ({ data }) => {

  // url, linkToProject, title, imageSrc, service, infoText

  return (
    <div className='project'>
      <div>
        {data.url ? <a href={data.url} className="project__image" target="_blank" rel="noopener noreferrer">
          <img src={data.imageSrc} alt={data.title}></img>
        </a> : <div className="project__image" rel="noopener noreferrer">
          <img src={data.imageSrc} alt={data.title}></img>
        </div>}
      </div>
      <div>
        <h3>{data.title}</h3>
        <span>{data.service}</span>
        <p className="project__infotext">{data.infoText}</p>
        <div>
          {data.url && <a href={data.url} target="_blank" rel="noopener noreferrer" className="project__link">
            <FontAwesomeIcon icon={faExternalLink} />
          </a>}
          <br />
          {data.linkToProject && <Link className="project__link" to={data.linkToProject}>Project details</Link>}
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Project;