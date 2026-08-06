import Link from 'next/link'

export default function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hi, I'm [Your Name]</h1>
        <p className="subtitle">Full Stack Engineer | Problem Solver | Builder</p>
        <p className="description">
          I build scalable software solutions and love working with modern technologies.
        </p>
        <div className="cta-buttons">
          <Link href="/projects" className="btn btn-primary">
            View My Work
          </Link>
          <Link href="/contact" className="btn btn-secondary">
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  )
}
