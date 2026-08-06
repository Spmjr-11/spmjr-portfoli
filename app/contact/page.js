import ContactForm from '@/components/ContactForm'

export default function Contact() {
  return (
    <section className="contact">
      <div className="container">
        <h1>Get In Touch</h1>
        <p className="section-description">
          Have a project in mind or want to collaborate? I'd love to hear from you!
        </p>
        
        <div className="contact-content">
          <ContactForm />
          
          <div className="contact-info">
            <h2>Other Ways to Connect</h2>
            <div className="contact-links">
              <p>
                <strong>Email:</strong> your.email@example.com
              </p>
              <p>
                <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">linkedin.com/in/yourprofile</a>
              </p>
              <p>
                <strong>GitHub:</strong> <a href="https://github.com/Spmjr-11" target="_blank" rel="noopener noreferrer">github.com/Spmjr-11</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
