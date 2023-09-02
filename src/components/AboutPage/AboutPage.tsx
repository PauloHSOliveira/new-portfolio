import SkillsList from '../SkillsList'
import TwoThirdsOneThird from '../TwoThirdsOneThird'
import Diagram from './Diagram'
import useAboutPage from './hooks'
import { text } from './constants'
import { memo } from 'react'

const AboutPage = memo(() => {
  const { getWebSkills, getOtherSkills } = useAboutPage()

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
        skills1={getWebSkills}
        skills2={getOtherSkills}
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
})

export default AboutPage
