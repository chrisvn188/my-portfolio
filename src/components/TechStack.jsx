import { techStack } from '../constants'
import Section from './Section'

const TechStack = () => {
  return (
    <Section
      className="space-y-12 py-12 md:py-24 bg-zinc-800"
      headingText="Tech Stack"
      id="skills">
      <StackList />
    </Section>
  )
}

function StackList() {
  return (
    <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {techStack.map(({ id, Icon, name, description }) => (
        <div key={id}>
          <Icon className="text-7xl text-violet-500" />
          <h3 className="pt-4 pb-2 text-xl font-semibold text-zinc-50">
            {name}
          </h3>
          <p className="text-clamp-base text-zinc-300">{description}</p>
        </div>
      ))}
    </ul>
  )
}

export default TechStack
