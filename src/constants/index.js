import { FaHtml5, FaReact } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io5'

export const navLinks = [
  {
    id: 0,
    title: 'projects',
    href: '#projects',
  },
  {
    id: 1,
    title: 'skills',
    href: '#skills',
  },
  {
    id: 2,
    title: 'about',
    href: '#about',
  },
  {
    id: 3,
    title: 'contact',
    href: '#contact',
  },
]

export const projects = [
  {
    id: 0,
    title: 'Youtube Clone',
    description:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,',
    imageUrl: '../src/assets/YOUTUBE-FAKE.png',
    githubUrl: '/',
    liveUrl: '/',
  },
  {
    id: 1,
    title: 'Pexel Clone',
    description:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,',
    imageUrl: '../src/assets/PEXEL-FAKE.png',
    githubUrl: '/',
    liveUrl: '/',
  },
  {
    id: 2,
    title: 'Dev Clone',
    description:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,',
    imageUrl: '../src/assets/DEV-FAKE.png',
    githubUrl: '/',
    liveUrl: '/',
  },
  {
    id: 3,
    title: 'Personal Portfolio',
    description:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,',
    imageUrl: '../src/assets/PORTFOLIO-V1.png',
    githubUrl: '/',
    liveUrl: '/',
  },
]

export const techStack = [
  {
    id: 0,
    name: 'HTML & CSS',
    Icon: FaHtml5,
    description:
      'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: 1,
    name: 'Javascript',
    Icon: IoLogoJavascript,
    description:
      'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: 2,
    name: 'React',
    Icon: FaReact,
    description:
      'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
]
