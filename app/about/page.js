export default function About() {
  return (
    <section className="about">
      <div className="container">
        <h1>About Me</h1>
        
        <div className="about-content">
          <div className="about-text">
            <h2>Who I Am</h2>
            <p>
            I'm a second year student at Western Michigan University, where I study Mechanical Engineering with a concetration in automotive. Through my classes, and being a active member of the FSAE team, I have gain real life experince, in solving problems by creating a new part or system. 
            </p>
            
            <h2>My Skills</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Technical</h3>
                <ul>
                  <li>SolidWorks/Onshape</li>
                  <li>Autocad</li>
                  <li>Microsoft Office Suite</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>Equipment</h3>
                <ul>
                  <li>3D Printer</li>
                  <li>Manual Mill Machine</li>
                  <li>Fanuc Robot</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>Personal</h3>
                <ul>
                  <li>Leadership</li>
                  <li>Communication</li>
                  <li>Eager to Learn</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
