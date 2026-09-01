import { useState } from 'react'
import { FiArrowUpRight, FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi'
import { navItems, profile } from '../data/portfolioData'

function Navbar({ activeSection, theme, onThemeChange }) {
  const [isOpen, setIsOpen] = useState(false)
  return <header className="site-header">
    <nav className="navbar container" aria-label="Main navigation">
      <a className="brand" href="#home" aria-label="Monisha V home"><span>MV</span><small>{profile.shortRole}</small></a>
      <button className="menu-toggle" type="button" aria-expanded={isOpen} aria-controls="main-menu" aria-label={isOpen ? 'Close menu' : 'Open menu'} onClick={() => setIsOpen(!isOpen)}>{isOpen ? <FiX /> : <FiMenu />}</button>
      <div className={`nav-menu ${isOpen ? 'is-open' : ''}`} id="main-menu">
        {navItems.map((item) => <a key={item.href} className={activeSection === item.href.slice(1) ? 'active' : ''} href={item.href} onClick={() => setIsOpen(false)}>{item.label}</a>)}
        <a className="nav-resume" href={profile.resume} download="Monisha-V-Resume.pdf">Resume</a>
        <a className="nav-cta" href="#contact" onClick={() => setIsOpen(false)}>Let's talk <FiArrowUpRight /></a>
      </div>
      <button className="theme-toggle" type="button" aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`} onClick={onThemeChange}>{theme === 'light' ? <FiMoon /> : <FiSun />}</button>
    </nav>
  </header>
}

export default Navbar
