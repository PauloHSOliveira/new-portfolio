import dynamic from 'next/dynamic'

const DynamicCarousel = dynamic(() => import('@/components/ProjectCarousel'))

const Works = () => {
  return <DynamicCarousel />
}

export default Works
