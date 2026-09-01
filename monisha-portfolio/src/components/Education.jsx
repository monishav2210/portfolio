import { motion } from 'framer-motion'
import { FiBookOpen } from 'react-icons/fi'
import { education } from '../data/portfolioData'

function Education() { return <section className="section education-section" id="education"><div className="container education-layout"><div><p className="eyebrow">07 / Education</p><h2>Grounded in<br /><em>the fundamentals.</em></h2></div><motion.div className="education-card" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}><div className="education-icon"><FiBookOpen /></div><div><span className="note-label">{education.year}</span><h3>{education.degree}</h3><p>{education.institution}</p><p className="education-result">{education.result}</p></div><span className="education-year">{education.year}</span></motion.div></div></section> }
export default Education
