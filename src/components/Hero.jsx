import Button from './Button'
import Section from './Section'
import TextPill from './decorations/TextPill'

/* eslint-disable react/prop-types */
const Hero = () => {
  return (
    <Section>
      <div className="px-4 py-12 md:py-16">
        <div className="text-center">
          <h1 className="font-bold text-1000 text-indigo-50 leading-tight capitalize max-w-[18ch] mx-auto">
            <span className="block bg-gradient-to-r from-indigo-500 to-pink-500 text-transparent bg-clip-text">
              Hi, I&apos;m Chris Bui
            </span>
            <span className="block">
              Frontend Engineer from Hanoi, Vietnam.
            </span>
          </h1>

          <p className="text-900 leading-relaxed text-indigo-200 mx-auto mt-6 max-w-[40ch] | lg:max-w-[52ch] |">
            I love the process of turning abstract ideas into practical,
            real-world applications through the power of programming.
          </p>

          <Button className="mt-14" href="#projects">
            View my work
          </Button>
        </div>
      </div>
      <TextPill
        className={'lg:top-[15%] lg:left-[10%] move-down'}
        color="orange">
        Team member
      </TextPill>
      <TextPill
        className={'lg:top-[20%] lg:right-[10%] move-up'}
        color="yellow">
        Soccer addict
      </TextPill>
      <TextPill
        className={'lg:bottom-[20%] lg:right-[15%] move-down'}
        color="indigo">
        Old music fan
      </TextPill>
      <TextPill
        className={'lg:bottom-[20%] lg:left-[15%] move-up'}
        color="pink">
        Hard work
      </TextPill>
    </Section>
  )
}

export default Hero
