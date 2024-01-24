import { memo } from 'react'

import AwesomeSlider from 'react-awesome-slider'

import 'react-awesome-slider/dist/styles.css'
import useProjectCarousel from './hooks'

const ProjectCarousel = memo(() => {
  const { renderProjects } = useProjectCarousel()

  return (
    <div className='h-screen w-screen overflow-hidden relative'>
      <AwesomeSlider
        organicArrows={true}
        selected={0}
        fillParent={true}
        infinite={true}
        mobileTouch={true}
        animation='cubeAnimation'
        cssModule={{
          slider: 'slider fluid-slider',
          slide: 'slide fluid-slide',
          bullet: 'bullet fluid-bullet',
          active: 'active fluid-active',
          visible: 'visible fluid-visible',
          button: 'button fluid-button',
          play: 'play fluid-play',
          pause: 'pause fluid-pause',
        }}
      >
        {renderProjects()}
      </AwesomeSlider>
    </div>
  )
})

export default ProjectCarousel
