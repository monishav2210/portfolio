import { motion } from 'framer-motion'
import { FiBriefcase, FiCalendar } from 'react-icons/fi'
import { experience } from '../data/portfolioData'

function Experience() {
  return <section className="section experience-section" id="experience"><div className="container"><div className="section-heading"><p className="eyebrow">04 / Experience</p><h2>Learning by<br /><em>building in public.</em></h2></div><motion.div className="timeline-item" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .4 }}><div className="timeline-marker"><FiBriefcase /></div><div className="timeline-content"><div className="timeline-top"><p className="eyebrow">Internship experience</p><span className="date"><FiCalendar /> {experience.period}</span></div><h3>{experience.role}</h3><p className="company">{experience.company}</p><p className="timeline-summary">Focused on applying Generative AI concepts to real software problems, from retrieval pipelines to useful AI application experiences.</p><ul className="experience-details">{experience.details.map((detail) => <li key={detail}>{detail}</li>)}</ul><div className="focus-list">{experience.focus.map((item) => <span key={item}>{item}</span>)}</div></div></motion.div></div></section>
}
export default Experience
