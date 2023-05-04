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

const otherSkills = [
  { name: 'Figma', icon: <FaFigma /> },
  { name: 'Photoshop', icon: <SiAdobe /> },
  { name: 'Facebook Business Suite', icon: <FaFacebook /> },
  { name: 'TikTok Ads Manager', icon: <SiTiktok /> },
  { name: 'Business Strategy', icon: <FaChartBar /> },
]

import { IoLogoJavascript } from 'react-icons/io'

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
      Hello, my name is Paulo Oliveira and I am a passionate software engineer
      specialized in front-end development and design. I also offer traffic
      management services and business strategies. I develop custom websites and
      applications that meet the specific needs of each project, always seeking
      the best usability, design, and performance. My passion for technology and
      innovation leads me to constantly search for the best practices and tools
      to deliver exceptional work.
    </p>
    <br />
    <p>
      Outside of work, I love to travel and explore new places and cultures.
      This allows me to bring new perspectives and inspirations to my projects.
      My ultimate professional goal is to found a technology company that can
      transform the way people use technology in their daily lives. Currently, I
      am working on new ideas, such as a fintech startup and other projects in
      the area of application and website development.
    </p>
    <br />
    <p>
      My work process is simple and efficient. First, I have a meeting with the
      client to understand their business needs and goals. From there, I develop
      a customized solution that meets their needs and objectives. My goal is
      always to deliver quality work that helps achieve the expected results. If
      you are looking for front-end development and design services, as well as
      strategies to leverage your business, contact me and let's work together
      to turn your ideas into reality.
    </p>
  </>
)

const text2 = (
  <>
    <p>
      My working process is based on a personalized and efficient approach.
      Firstly, I have a meeting with the client to understand their needs and
      business objectives. This conversation is fundamental so that I can
      understand the specific demands of the project, as well as the
      expectations regarding the expected results.
    </p>
    <br />
    <p>
      From this, I develop a personalized solution that meets the client's needs
      and objectives. Throughout the development process, I maintain constant
      communication with the client so that we can exchange feedback and adjust
      the work as needs arise.
    </p>
    <br />
    <p>
      My goal is always to deliver quality work that helps achieve the expected
      results. To do this, I use the best practices and tools in the market,
      ensuring exceptional work. Additionally, I'm always looking to improve my
      skills and knowledge so that I can always offer the best possible service.
    </p>
    <br />
    <p>
      I believe that the key to a successful project is the partnership between
      client and developer. Therefore, I'm always open to suggestions and ideas
      from the client so that we can work together to find the ideal solution.
      If you're looking for personalized and quality software development
      services, please contact me and let's work together to turn your ideas
      into reality. 🚀
    </p>
  </>
)

export default function About() {
  return (
    <>
      <div className="p-4 md:p-24">
        <div className="text-gray-900 text-3xl md:text-5xl p-4 md:p-12">
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
      <div className="bg-gray-900 w-full h-96"></div>
      <div className="p-4 md:p-24">
        <div className="text-gray-900 text-5xl">How i work</div>
        <TwoThirdsOneThird
          text={text2}
          position="left"
          imagePath="/static/meeting.webp"
        />
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
