import { NextSeo } from 'next-seo'
import { getCanonical } from './utils'

interface SEOProps {
  title: string
  description: string
}

const SEO = ({ title, description }: SEOProps) => {
  const canonical = getCanonical()
  const titleTemplate = '%s | Portfólio'
  const defaultTitle = 'Meu Site - Descrição do site aqui'
  const defaultDescription =
    'Este é um exemplo de descrição padrão. Este texto pode ser personalizado para cada página.'
  const siteUrl = getCanonical()

  return (
    <NextSeo
      title={title}
      titleTemplate={titleTemplate}
      description={description || defaultDescription}
      canonical={canonical || siteUrl}
      openGraph={{
        url: siteUrl,
        title: title || defaultTitle,
        description: description || defaultDescription,
        images: [
          {
            url: `/static/developer.webp`,
            alt: title || defaultTitle,
          },
        ],
      }}
    />
  )
}

export { SEO }
