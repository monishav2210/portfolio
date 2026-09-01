import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowUpRight, FiGithub, FiGlobe, FiX } from 'react-icons/fi'
import { projects } from '../data/portfolioData'

function Action({ href, icon: Icon, label }) { return href ? <a href={href} target="_blank" rel="noreferrer" aria-label={`${label} project`}><Icon /></a> : <span className="icon-action is-disabled" aria-label={`${label} link unavailable`}><Icon /></span> }

function ProjectDetailModal({ project, onClose }) {
  if (!project) return null

  return (
    <AnimatePresence>
      <motion.div
        className="project-modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="project-modal"
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.98 }}
          transition={{ duration: 0.2 }}
          onClick={(event) => event.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} details`}
        >
          <button className="project-modal-close" onClick={onClose} aria-label="Close project details">
            <FiX />
          </button>

          <p className="eyebrow project-modal-kicker">Project details</p>
          <h3>{project.title}</h3>

          <div className="project-detail-group">
            <h4>Overview</h4>
            <p>{project.overview}</p>
          </div>

          <div className="project-detail-group">
            <h4>Problem</h4>
            <p>{project.problem}</p>
          </div>

          <div className="project-detail-group">
            <h4>Solution / Approach</h4>
            <p>{project.solution}</p>
          </div>

          <div className="project-detail-group">
            <h4>Key Features</h4>
            <ul>
              {project.features.map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
          </div>

          <div className="project-detail-group">
            <h4>Technologies Used</h4>
            <div className="card-tags">
              {project.technologies.map((tech) => <span key={tech}>{tech}</span>)}
            </div>
          </div>

          <div className="project-detail-group">
            <h4>My Contribution</h4>
            <p>{project.contribution}</p>
          </div>

          <div className="project-detail-group">
            <h4>Results / Impact</h4>
            <p>{project.results}</p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <>
      <section className="section projects-section" id="projects">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">05 / Projects</p>
              <h2>Things<br /><em>I have built.</em></h2>
            </div>
            <p className="heading-note">AI-driven applications and solutions that combine intelligent systems with user-focused design.</p>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.article
                className="project-card project-card-clickable"
                key={project.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: .2 }}
                transition={{ delay: index * .08 }}
                onClick={() => setSelectedProject(project)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault()
                    setSelectedProject(project)
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`Open details for ${project.title}`}
              >
                <div className="project-card-top"><span>0{index + 1}</span><FiArrowUpRight /></div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-card-footer">
                  <div className="card-tags">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
                  <div className="card-actions"><Action href={project.github} icon={FiGithub} label="GitHub" /><Action href={project.liveDemo} icon={FiGlobe} label="Live demo" /></div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section build-ai-section" id="how-i-build-ai">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">06 / How I Build AI</p>
              <h2>How I Build AI</h2>
            </div>
            <p className="heading-note">A simple, practical workflow for grounding AI systems in user intent, retrieval, generation, and evaluation.</p>
          </div>

          <div className="build-ai-workflow" aria-label="AI build workflow">
            <div className="build-ai-step">
              <span className="step-index">01</span>
              <h3>Understand</h3>
              <p>Analyze the user's query.</p>
            </div>
            <div className="build-ai-arrow" aria-hidden="true">→</div>
            <div className="build-ai-step">
              <span className="step-index">02</span>
              <h3>Retrieve</h3>
              <p>Find relevant information using retrieval, embeddings, and semantic search.</p>
            </div>
            <div className="build-ai-arrow" aria-hidden="true">→</div>
            <div className="build-ai-step">
              <span className="step-index">03</span>
              <h3>Generate</h3>
              <p>Use the relevant context with an LLM to generate the response.</p>
            </div>
            <div className="build-ai-arrow" aria-hidden="true">→</div>
            <div className="build-ai-step">
              <span className="step-index">04</span>
              <h3>Evaluate</h3>
              <p>Check and improve the response quality.</p>
            </div>
          </div>
        </div>
      </section>

      <ProjectDetailModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  )
}

export default Projects
