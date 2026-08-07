import Link from 'next/link'

export default function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hi, I'm Sean McCormick</h1>
        <p className="subtitle">Mechanical Engineering Student | WMU FSAE Member</p>
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
