import { NextSeo } from 'next-seo'

import useSEO from './hooks'

const SEO = () => {
  const { canonical, defaultDescription, defaultTitle, siteUrl, titleTemplate } = useSEO()

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
