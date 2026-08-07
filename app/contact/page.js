import ContactForm from '@/components/ContactForm'

export default function Contact() {
  return (
    <section className="contact">
      <div className="container">
        <h1>Get In Touch</h1>
        <p>Feel free to reach out! I'd love to hear from you.</p>
        
        <ContactForm />
        
        <h2>Other Ways to Connect</h2>
        <div className="contact-links">
          <p>
            <strong>Email:</strong> sean.p39.mccormick@wmich.edu
          </p>
          <p>
            <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/sean-mccormick-jr-b37a9a348" target="_blank" rel="noopener noreferrer">linkedin.com/in/Sean-McCormick</a>
          </p>
          <p>
            <strong>Phone Number:</strong> +1 (734)-548-4363
          </p>
        </div>
      </div>
    </section>
  )
}
