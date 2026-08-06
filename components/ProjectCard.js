import Link from 'next/link'

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        
        <div className="technologies">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="project-links">
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="link-btn">
            Live Demo
          </a>
          <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="link-btn">
            View Code
          </a>
        </div>
      </div>
    </div>
  )
}