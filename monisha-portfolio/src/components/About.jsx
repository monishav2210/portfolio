import { motion } from 'framer-motion'
import { FiArrowUpRight, FiCode, FiLayers, FiTarget } from 'react-icons/fi'
import { aboutHighlights } from '../data/portfolioData'

function About() {
  const cards = [{ icon: FiTarget, title: 'Problem solving', text: 'Curious about the gap between a complex problem and an elegant solution.' }, { icon: FiLayers, title: 'AI systems', text: 'Exploring how context, retrieval, and language models become useful products.' }, { icon: FiCode, title: 'Web craft', text: 'Building clear, responsive interfaces that make technical ideas accessible.' }]
  return <section className="section about-section" id="about"><div className="container">
    <div className="section-heading"><p className="eyebrow">02 / About</p><h2>Useful technology<br /><em>starts with empathy.</em></h2><p className="heading-note">A BCA graduate turning an interest in intelligent systems into thoughtful software.</p></div>
    <div className="about-layout"><div className="about-statement"><p>I like working where <span className="gold-text">intelligence meets interface</span> — shaping AI ideas into experiences people can actually use.</p><a className="text-link" href="#contact">Start a conversation <FiArrowUpRight /></a></div><div className="highlight-grid">{aboutHighlights.map((item) => <div className="highlight" key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}</div></div>
    <div className="about-cards">{cards.map(({ icon: Icon, title, text }, index) => <motion.article className="info-card" key={title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .3 }} transition={{ delay: index * .1 }}><Icon /><h3>{title}</h3><p>{text}</p></motion.article>)}</div>
  </div></section>
}
export default About
