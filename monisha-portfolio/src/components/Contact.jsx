import { useState } from 'react'
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { profile } from '../data/portfolioData'

function Contact() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(null)
  const formspreeEndpoint = 'https://formspree.io/f/xaeyqgkz'
  const emailHref = `mailto:${profile.email}`

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    setError(null)

    const formData = new FormData(event.target)

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      })

      if (response.ok) {
        setSuccess(true)
        event.target.reset()
        // Reset success message after 5 seconds
        setTimeout(() => setSuccess(false), 5000)
      } else {
        setError('Failed to send message. Please try again.')
      }
    } catch (err) {
      setError('An error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="contact-layout">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="eyebrow">08 / Contact</p>
            <h2>Let's build something<br /><em>intelligent.</em></h2>
            <p className="contact-copy">Have a product idea, a technical challenge, or a good question? I would love to hear what you are working on.</p>
            <div className="contact-links">
              <span className="phone-link"><FiPhone /> {profile.phone || profile.phonePlaceholder}</span>
              {profile.email ? (
                <a className="email-link" href={emailHref} aria-label={`Email ${profile.email}`} onClick={() => window.location.href = emailHref}><FiMail /> {profile.email} <FiArrowUpRight /></a>
              ) : (
                <span><FiMail /> {profile.emailPlaceholder}</span>
              )}
              <a href={profile.github} target="_blank" rel="noreferrer"><FiGithub /> GitHub <FiArrowUpRight /></a>
              {profile.linkedin ? (
                <a href={profile.linkedin} target="_blank" rel="noreferrer"><FiLinkedin /> LinkedIn <FiArrowUpRight /></a>
              ) : (
                <span><FiLinkedin /> {profile.linkedinPlaceholder}</span>
              )}
            </div>
          </motion.div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">
              Your name
              <input id="name" name="name" required disabled={loading} />
            </label>
            <label htmlFor="email">
              Email address
              <input id="email" name="email" type="email" required disabled={loading} />
            </label>
            <label htmlFor="message">
              Tell me about it
              <textarea id="message" name="message" rows="4" required disabled={loading} />
            </label>
            <button className="button button-primary" type="submit" disabled={loading}>
              {success ? 'Message sent!' : loading ? 'Sending...' : 'Send message'} <FiArrowUpRight />
            </button>

            {success && (
              <small style={{ color: '#4ade80', display: 'block', marginTop: '0.5rem' }}>
                Thank you! Your message has been sent successfully.
              </small>
            )}

            {error && (
              <small style={{ color: '#ef4444', display: 'block', marginTop: '0.5rem' }}>
                {error}
              </small>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
