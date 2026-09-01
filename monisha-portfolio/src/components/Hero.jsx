import { motion } from 'framer-motion'
import { FiArrowDown, FiArrowUpRight, FiDownload } from 'react-icons/fi'
import { profile } from '../data/portfolioData'

function Hero() {

  return <section className="hero section" id="home">
    <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
    <div className="container hero-grid">
      <motion.div className="hero-copy" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <p className="eyebrow"><span className="eyebrow-line" /> Available for intelligent builds</p>
        <h1>{profile.name}</h1>
        <p className="hero-role">{profile.role}</p>
        <p className="hero-description">{profile.description}</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">Explore my work <FiArrowUpRight /></a>
          <a className="button button-quiet" href={profile.resume} download="Monisha-V-Resume.pdf"><FiDownload /> Download Resume</a>
        </div>
      </motion.div>
      <motion.div className="hero-type-visual" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .8, delay: .15 }} aria-hidden="true">
        <span className="type-index">/ 001</span><span className="type-word word-one">GENERATIVE AI</span><span className="type-word word-two">ENGINEER</span><span className="type-rule" /><span className="type-caption">RAG • LLM • Applications</span>
      </motion.div>
    </div>
    <a className="scroll-cue" href="#about" aria-label="Scroll to about section"><span>Scroll to explore</span><FiArrowDown /></a>
  </section>
}
export default Hero
