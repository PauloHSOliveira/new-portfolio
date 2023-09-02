import { NextSeo } from 'next-seo'
import { getCanonical } from './utils'

const SEO = () => {
  const canonical = getCanonical()
  const titleTemplate = '%s | Portfólio'
  const defaultTitle =
    'PH Oliveira DEV | Software Engineer & Fullstack Developer, UI/UX Designer and Business Strategist'
  const defaultDescription =
    'Hi, I am Paulo Oliveira, a passionate software engineer, designer, and business strategist based in Brazil. With experience in front-end and back-end development, UI/UX design, and digital advertising including Facebook and Google Ads.'
  const siteUrl = getCanonical()

  return (
    <NextSeo
      title={defaultTitle}
      titleTemplate={titleTemplate}
      description={defaultDescription}
      canonical={canonical || siteUrl}
      openGraph={{
        url: siteUrl,
        siteName: 'PH Oliveira',
        title: defaultTitle,
        description: defaultDescription,
        type: 'website',
        images: [
          {
            url: `/static/developer.webp`,
            alt: defaultTitle,
          },
        ],
      }}
      robotsProps={{
        nosnippet: false, // permite que o snippet seja exibido nos resultados da pesquisa
        notranslate: false, // permite que o Google traduza a página
        noimageindex: false, // permite que as imagens sejam indexadas
      }}
    />
  )
}

export { SEO }
