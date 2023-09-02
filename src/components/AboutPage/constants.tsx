import {
  LineSegment,
  Rocket,
  CheckSquare,
  Desktop,
  CodeBlock,
} from '@phosphor-icons/react'
import { IoLogoJavascript } from 'react-icons/io'
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
import { Steps } from '@/types'

const steps: Steps = {
  ids: ['0', '1', '2', '3', '4'],
  entities: {
    0: {
      icon: <Desktop size={68} />,
      text: "Understand client's needs and objectives",
    },
    1: {
      icon: <CodeBlock size={68} />,
      text: 'Develop a personalized solution',
    },
    2: {
      icon: <LineSegment size={68} />,
      text: 'Maintain constant communication and exchange feedback',
    },
    3: {
      icon: <Rocket size={68} />,
      text: 'Deliver quality work using best practices and tools',
    },
    4: {
      icon: <CheckSquare size={68} />,
      text: 'Achieve successful project completion',
    },
  },
}

const otherSkills: Steps = {
  ids: ['0', '1', '2', '3'],
  entities: {
    0: { name: 'Figma', icon: <FaFigma /> },
    1: { name: 'Photoshop', icon: <SiAdobe /> },
    2: { name: 'Facebook Business Suite', icon: <FaFacebook /> },
    3: { name: 'TikTok Ads Manager', icon: <SiTiktok /> },
    4: { name: 'Business Strategy', icon: <FaChartBar /> },
  },
}

const webDevSkills: Steps = {
  ids: [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
  ],
  entities: {
    0: { name: 'Next.js', icon: <SiNextdotjs /> },
    1: { name: 'React.js', icon: <FaReact /> },
    2: { name: 'React Native', icon: <FaReact /> },
    3: { name: 'Web3', icon: <IoLogoJavascript /> },
    4: { name: 'Firebase', icon: <SiFirebase /> },
    5: { name: 'GraphQL', icon: <SiGraphql /> },
    6: { name: 'Node.js', icon: <FaNodeJs /> },
    7: { name: 'Algolia', icon: <SiAlgolia /> },
    8: { name: 'Next SEO', icon: <SiNextdotjs /> },
    9: { name: 'MongoDB', icon: <SiMongodb /> },
    10: { name: 'PostgreSQL', icon: <SiPostgresql /> },
    11: { name: 'Docker', icon: <FaDocker /> },
    12: { name: 'JavaScript', icon: <SiJavascript /> },
    13: { name: 'TypeScript', icon: <SiTypescript /> },
    14: { name: 'HTML5', icon: <FaHtml5 /> },
    15: { name: 'CSS3', icon: <FaCss3Alt /> },
    16: { name: 'Express', icon: <FaNodeJs /> },
    17: { name: 'Cypress', icon: <SiCypress /> },
    18: { name: 'Storybook', icon: <SiStorybook /> },
    19: { name: 'Styled Components', icon: <FaReact /> },
    20: { name: 'TailwindCSS', icon: <FaReact /> },
    21: { name: 'React Query', icon: <FaReact /> },
    22: { name: 'Wordpress', icon: <SiWordpress /> },
    23: { name: 'Shopify', icon: <SiShopify /> },
  },
}
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

export { steps, text, otherSkills, webDevSkills }
