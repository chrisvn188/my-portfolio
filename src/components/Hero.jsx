import Button from './Button'
import Section from './Section'

/* eslint-disable react/prop-types */
const Hero = () => {
  return (
    <Section>
      <div className="px-4 py-16">
        <div className="text-center">
          <h1 className="font-bold text-1000 leading-tight capitalize max-w-[20ch] mx-auto">
            Hi, my name is{' '}
            <span className="bg-gradient-to-r from-indigo-500 to-pink-500 text-transparent bg-clip-text">
              <br className="md:hidden" />
              Chris Bui
            </span>{' '}
            <br />A software engineer from Vietnam.
          </h1>

          <p className="font-[Sora] text-900 leading-loose mb-10 mt-8 text-slate-200 max-w-[56ch] px-4 mx-auto">
            I love creating fast, reliable and beautiful websites, web
            applications. Check out my latest projects below and let&apos;s
            build something together!
          </p>

          <Button href="#projects">view my work</Button>
        </div>
      </div>
    </Section>
  )
}

export default Hero
