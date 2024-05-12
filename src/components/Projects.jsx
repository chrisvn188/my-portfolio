import { projects } from '../constants'
import Section from './Section'

const Projects = () => {
  return (
    <Section id="#projects" className="min-h-dvh bg-color-2">
      <div className="p-4 md:max-w-[60rem] lg:max-w-[80rem] md:mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold capitalize mb-24 text-center">
          My latest projects
        </h2>
        <ul className="grid gap-24 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className="flex flex-col md:even:items-end gap-4 group">
              <div className="md:flex-1">
                <a href={project.liveUrl} target="_blank">
                  <img
                    className="max-w-full"
                    src={project.imageUrl}
                    alt={project.title}
                  />
                </a>
              </div>
              <div className="px-4 py-8 md:px-8 bg-color-1 md:max-w-[50ch] shadow-2xl group-hover:shadow-indigo-500/30">
                <h3 className="capitalize font-sans font-bold text-2xl md:text-3xl lg:text-4xl">
                  {project.title}
                </h3>
                <p className="text-900 mt-4">{project.description}</p>
              </div>
            </article>
          ))}
        </ul>
      </div>
    </Section>
  )
}

export default Projects
