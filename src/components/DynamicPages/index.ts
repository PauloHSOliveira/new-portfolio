import dynamic from 'next/dynamic'

const AboutPage = dynamic(() => import('../AboutPage'))
const ContactPage = dynamic(() => import('../ContactPage'))
const HomePage = dynamic(() => import('../HomePage'))
const DynamicCarousel = dynamic(() => import('../ProjectCarousel'))

export { AboutPage, ContactPage, DynamicCarousel, HomePage }
