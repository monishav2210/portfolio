import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { profile } from '../data/portfolioData'

function Footer() {
  const emailHref = `mailto:${profile.email}`

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <a className="brand" href="#home"><span>MV</span><small>Generative AI Developer</small></a>
        <div className="footer-links">
          <a href={profile.github} target="_blank" rel="noreferrer"><FiGithub /> GitHub</a>
          {profile.linkedin ? <a href={profile.linkedin} target="_blank" rel="noreferrer"><FiLinkedin /> LinkedIn</a> : <span><FiLinkedin /> LinkedIn</span>}
          {profile.email ? <a href={emailHref} aria-label={`Email ${profile.email}`} onClick={() => window.location.href = emailHref}><FiMail /> Email</a> : <span><FiMail /> Email</span>}
        </div>
        <p>© 2026 Monisha V. Built with curiosity.</p>
      </div>
    </footer>
  )
}

export default Footer
