import Section from './utils/Section'
import BlurBackground from './decorations/BlurBackground'
import TextPill from './decorations/TextPill'

/* eslint-disable react/prop-types */
const Hero = () => {
  return (
    <Section className="isolate">
      <HeroText />
      <Decorations />
    </Section>
  )
}

function HeroText() {
  return (
    <div className="px-4 py-14 md:py-24 lg:py-32 relative z-20">
      <div className="text-center">
        <h1 className="text-clamp-xl text-indigo-50 leading-tight capitalize max-w-[18ch] mx-auto">
          <span className="block bg-gradient-to-r from-indigo-500 to-pink-500 text-transparent bg-clip-text font-light text-2xl md:text-4xl pb-2">
            Hi, I&apos;m Chris Bui
          </span>
          <span className="block font-bold text-balance">
            Frontend web developer from Vietnam.
          </span>
        </h1>
        <p className="text-clamp-hero leading-relaxed text-zinc-300 mx-auto mt-6 max-w-[40ch] | lg:max-w-[52ch] |">
          I love the process of turning abstract ideas into practical,
          real-world applications through the power of programming.
        </p>
        <button
          className="c-button mt-14 md:mt-16 lg:mt-20 bg-indigo-600 text-clamp-base text-zinc-50"
          href="#projects">
          View my work
        </button>
      </div>
    </div>
  )
}

function Decorations() {
  return (
    <>
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
        color="violet">
        Old music fan
      </TextPill>
      <TextPill
        className={'lg:bottom-[20%] lg:left-[15%] move-up'}
        color="pink">
        Hard work
      </TextPill>
      <BlurBackground className="w-[30rem] h-[30rem] bg-gradient-to-r from-indigo-500/20 to-pink-500/20 bottom-0 right-[5%] blur-3xl" />
      <BlurBackground className="w-[30rem] h-[30rem] bg-gradient-to-tr from-red-500/20 to-violet-500/20 top-0 left-[5%] blur-3xl move-down" />
    </>
  )
}

export default Hero
