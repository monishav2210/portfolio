import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import { skillGroups } from '../data/portfolioData'

function Skills() {
  return <section className="section skills-section" id="skills"><div className="container"><div className="section-heading split-heading"><div><p className="eyebrow">03 / Skills</p><h2>A toolkit for<br /><em>intelligent products.</em></h2></div><p className="heading-note">A growing, hands-on stack spanning the model layer to the interface layer.</p></div><div className="skill-grid">{skillGroups.map((group, index) => <motion.article className="skill-group" key={group.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ delay: index * .08 }}><div className="skill-group-top"><span>{group.eyebrow}</span><FiArrowUpRight /></div><h3>{group.title}</h3><div className="skill-list">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></motion.article>)}</div></div></section>
}
export default Skills
