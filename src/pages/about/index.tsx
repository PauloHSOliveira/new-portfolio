import { SkillsList, TwoThirdsOneThird } from '@/components'
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaHtml5,
  FaCss3Alt,
  FaFigma,
  FaFacebook,
  FaChartBar,
} from 'react-icons/fa'
import {
  SiNextdotjs,
  SiFirebase,
  SiGraphql,
  SiAlgolia,
  SiMongodb,
  SiPostgresql,
  SiJavascript,
  SiTypescript,
  SiCypress,
  SiStorybook,
  SiWordpress,
  SiShopify,
  SiAdobe,
  SiTiktok,
} from 'react-icons/si'
import { GetLayout } from '@/interfaces/global'
import { Layout } from '@/components'

const getLayout: GetLayout = (page: JSX.Element) => {
  return <Layout>{page}</Layout>
}

const otherSkills = [
  { name: 'Figma', icon: <FaFigma /> },
  { name: 'Photoshop', icon: <SiAdobe /> },
  { name: 'Facebook Business Suite', icon: <FaFacebook /> },
  { name: 'TikTok Ads Manager', icon: <SiTiktok /> },
  { name: 'Business Strategy', icon: <FaChartBar /> },
]

import { IoLogoJavascript } from 'react-icons/io'
import { useRedirect } from '@/hooks'
import { useEffect } from 'react'

const webDevSkills = [
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'React.js', icon: <FaReact /> },
  { name: 'React Native', icon: <FaReact /> },
  { name: 'Web3', icon: <IoLogoJavascript /> },
  { name: 'Firebase', icon: <SiFirebase /> },
  { name: 'GraphQL', icon: <SiGraphql /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Algolia', icon: <SiAlgolia /> },
  { name: 'Next SEO', icon: <SiNextdotjs /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'PostgreSQL', icon: <SiPostgresql /> },
  { name: 'Docker', icon: <FaDocker /> },
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'HTML5', icon: <FaHtml5 /> },
  { name: 'CSS3', icon: <FaCss3Alt /> },
  { name: 'Express', icon: <FaNodeJs /> },
  { name: 'Cypress', icon: <SiCypress /> },
  { name: 'Storybook', icon: <SiStorybook /> },
  { name: 'Styled Components', icon: <FaReact /> },
  { name: 'TailwindCSS', icon: <FaReact /> },
  { name: 'React Query', icon: <FaReact /> },
  { name: 'Wordpress', icon: <SiWordpress /> },
  { name: 'Shopify', icon: <SiShopify /> },
]

const text = (
  <>
    <p>
      Hello! I'm Paulo Oliveira, a passionate software engineer specializing in
      front-end development and design. I offer custom website and application
      development services focused on usability, design, and performance.
    </p>
    <br />
    <p>
      I constantly seek the best practices and tools to deliver exceptional
      work. When I'm not working, I enjoy traveling and exploring new places and
      cultures, which brings fresh perspectives and inspirations to my projects.
    </p>
    <br />
    <p>
      My ultimate professional goal is to establish a technology company that
      transforms the way people use technology in their daily lives. Currently,
      I'm working on exciting projects, including a fintech startup and other
      application and website development endeavors.
    </p>
    <br />
    <p>
      My work process is simple and efficient. It begins with a thorough
      understanding of your business needs and goals through personalized
      meetings. Then, I develop a customized solution that meets your
      objectives. My focus is on delivering high-quality work that helps you
      achieve the expected results.
    </p>
    <br />
    <p>
      If you're seeking front-end development and design services, as well as
      strategies to enhance your business, let's collaborate to bring your ideas
      to life. Contact me to get started.
    </p>
  </>
)

import React from 'react'
import {
  LineSegment,
  Rocket,
  CheckSquare,
  Desktop,
  CodeBlock,
} from '@phosphor-icons/react'

const Diagram = () => {
  const steps = [
    {
      icon: <Desktop size={68} />,
      text: "Understand client's needs and objectives",
    },
    {
      icon: <CodeBlock size={68} />,
      text: 'Develop a personalized solution',
    },
    {
      icon: <LineSegment size={68} />,
      text: 'Maintain constant communication and exchange feedback',
    },
    {
      icon: <Rocket size={68} />,
      text: 'Deliver quality work using best practices and tools',
    },
    {
      icon: <CheckSquare size={68} />,
      text: 'Achieve successful project completion',
    },
  ]

  return (
    <div className="flex items-center gap-4 flex-wrap md:flex-nowrap">
      {steps.map((step, index) => (
        <div
          className="w-full flex flex-col justify-center items-center max-w-sm bg-white rounded-lg shadow-sm shadow-white p-8 my-4 h-52 text-black"
          key={index}
        >
          <div>{step.icon}</div>
          <p className="text-md mt-4">{step.text}</p>
        </div>
      ))}
    </div>
  )
}

const About = () => {
  const { redirectHome } = useRedirect()

  useEffect(() => {
    redirectHome()
  }, [redirectHome])

  return (
    <>
      <div className="p-4 md:p-24">
        <div className="text-gray-900 text-3xl md:text-5xl pt-16 pb-4 px-4 sm:p-12">
          <p>
            I am a passionate <strong>software engineer</strong> specialized in
            <strong> front-end</strong> development, <strong>design</strong> and
            <strong> business strategies</strong>, offering customized services
            to boost your business 🚀.
          </p>
        </div>
        <TwoThirdsOneThird
          text={text}
          position="left"
          imagePath="/static/developer.webp"
        />
      </div>
      <div className="w-screen p-8 sm:p-16 bg-gray-900">
        <div className="text-neutral text-5xl text-left mb-12">How I work</div>
        <Diagram />
      </div>

      <SkillsList
        skills1={webDevSkills}
        skills2={otherSkills}
        title="My Skills"
        subtitle1="Development Skills"
        subtitle2="Other Skills"
      />

      <div className="bg-white w-full h-96 text-gray-900 flex items-center p-4 md:p-24">
        <blockquote className="text-4xl md:text-6xl font-medium text-center max-w-4xl mx-auto">
          "Choose a job you love and you will never have to work a day in your
          life"
          <cite className="block mt-4 text-xl md:text-2xl font-semibold text-gray-400">
            - Confucius
          </cite>
        </blockquote>
      </div>
    </>
  )
}

About.getLayout = getLayout

export default About
