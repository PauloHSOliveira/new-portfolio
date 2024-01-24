import { CheckSquare, CodeBlock, Desktop, LineSegment, Rocket } from '@phosphor-icons/react'
import {
  FaChartBar,
  FaCss3Alt,
  FaDocker,
  FaFacebook,
  FaFigma,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import {
  SiAdobe,
  SiAlgolia,
  SiCypress,
  SiFirebase,
  SiGraphql,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiShopify,
  SiStorybook,
  SiTiktok,
  SiTypescript,
  SiWordpress,
} from 'react-icons/si'

import { Skill, Steps } from '@/types'

const steps: Steps[] = [
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

const skills: Skill[] = [
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

const skills2: Skill[] = [
  { name: 'Figma', icon: <FaFigma /> },
  { name: 'Photoshop', icon: <SiAdobe /> },
  { name: 'Facebook Business Suite', icon: <FaFacebook /> },
  { name: 'TikTok Ads Manager', icon: <SiTiktok /> },
  { name: 'Business Strategy', icon: <FaChartBar /> },
]

const text = (
  <>
    <p>
      Hello! I'm Paulo Oliveira, a passionate software engineer specializing in front-end
      development and design. I offer custom website and application development services focused on
      usability, design, and performance.
    </p>
    <br />
    <p>
      I constantly seek the best practices and tools to deliver exceptional work. When I'm not
      working, I enjoy traveling and exploring new places and cultures, which brings fresh
      perspectives and inspirations to my projects.
    </p>
    <br />
    <p>
      My ultimate professional goal is to establish a technology company that transforms the way
      people use technology in their daily lives. Currently, I'm working on exciting projects,
      including a fintech startup and other application and website development endeavors.
    </p>
    <br />
    <p>
      My work process is simple and efficient. It begins with a thorough understanding of your
      business needs and goals through personalized meetings. Then, I develop a customized solution
      that meets your objectives. My focus is on delivering high-quality work that helps you achieve
      the expected results.
    </p>
    <br />
    <p>
      If you're seeking front-end development and design services, as well as strategies to enhance
      your business, let's collaborate to bring your ideas to life. Contact me to get started.
    </p>
  </>
)

export { steps, text, skills, skills2 }
