import { getCanonical } from './utils'

const useSEO = () => {
  const canonical = getCanonical()
  const titleTemplate = '%s | Portfólio'
  const defaultTitle =
    'PH Oliveira DEV | Software Engineer & Fullstack Developer, UI/UX Designer and Business Strategist'
  const defaultDescription =
    'Hi, I am Paulo Oliveira, a passionate software engineer, designer, and business strategist based in Brazil. With experience in front-end and back-end development, UI/UX design, and digital advertising including Facebook and Google Ads.'
  const siteUrl = getCanonical()

  return { canonical, titleTemplate, defaultTitle, defaultDescription, siteUrl }
}

export default useSEO
