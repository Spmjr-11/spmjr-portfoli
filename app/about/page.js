export default function About() {
  return (
    <section className="about">
      <div className="container">
        <h1>About Me</h1>
        
        <div className="about-content">
          <div className="about-text">
            <h2>Who I Am</h2>
            <p>
              I'm a passionate engineer with [X years] of experience in full-stack development.
              I specialize in building robust, scalable applications using modern technologies.
            </p>
            
            <h2>My Skills</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Frontend</h3>
                <ul>
                  <li>React / Next.js</li>
                  <li>JavaScript / TypeScript</li>
                  <li>CSS / Tailwind</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>Backend</h3>
                <ul>
                  <li>Node.js</li>
                  <li>Python / FastAPI</li>
                  <li>PostgreSQL / MongoDB</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>Tools & Platforms</h3>
                <ul>
                  <li>Git / GitHub</li>
                  <li>Docker</li>
                  <li>AWS / Vercel</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
