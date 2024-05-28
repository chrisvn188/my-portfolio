import { FaHtml5, FaReact } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io5'
import Section from './Section'

const stack = [
  {
    id: 1,
    name: 'HTML & CSS',
    Icon: FaHtml5,
    description:
      'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: 2,
    name: 'Javascript',
    Icon: IoLogoJavascript,
    description:
      'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: 3,
    name: 'React',
    Icon: FaReact,
    description:
      'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
]

const TechStack = () => {
  return (
    <Section
      className="space-y-12 py-12 md:py-24 bg-zinc-800"
      headingText="Tech Stack">
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-">
        {stack.map(({ id, Icon, name, description }) => (
          <div key={id}>
            <Icon className="text-7xl text-violet-600" />
            <h3 className="py-4 text-xl font-semibold text-zinc-50">{name}</h3>
            <p className="text-clamp-base text-zinc-300">{description}</p>
          </div>
        ))}
      </ul>
    </Section>
  )
}

export default TechStack
