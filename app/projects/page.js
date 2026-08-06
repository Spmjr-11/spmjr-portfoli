import ProjectCard from '@/components/ProjectCard'

const projects = [
  {
    id: 1,
    title: 'Project Title 1',
    description: 'Brief description of what this project does and the problem it solves.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    image: '/images/project1.jpg',
    liveLink: 'https://example.com',
    codeLink: 'https://github.com/yourusername/project1',
  },
  {
    id: 2,
    title: 'Project Title 2',
    description: 'Another project showcasing your skills and experience.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL'],
    image: '/images/project2.jpg',
    liveLink: 'https://example.com',
    codeLink: 'https://github.com/yourusername/project2',
  },
  {
    id: 3,
    title: 'Project Title 3',
    description: 'Demonstrate your technical abilities with real-world examples.',
    technologies: ['Python', 'FastAPI', 'Docker'],
    image: '/images/project3.jpg',
    liveLink: 'https://example.com',
    codeLink: 'https://github.com/yourusername/project3',
  },
]

export default function Projects() {
  return (
    <section className="projects">
      <div className="container">
        <h1>My Projects</h1>
        <p className="section-description">
          Here are some of my recent projects. Each represents different challenges and solutions.
        </p>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
