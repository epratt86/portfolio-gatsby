import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import img from "../img/thumbnail.jpg"

const Head = ({ title, description }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          keywords
          siteUrl
        }
      }
    }
  `)

  return (
    <Helmet title={`${title} | ${data.site.siteMetadata.title}`}>
      <html lang="en" />
      <meta name="description" content={`${description}`} />
      <meta
        name="og:title"
        property="og:title"
        content={`${title} | ${data.site.siteMetadata.title}`}
      />
      <meta
        name="og:description"
        property="og:description"
        content={`${description}`}
      />
      <meta
        name="og:url"
        property="og:url"
        content={`${data.site.siteMetadata.siteUrl}`}
      />
      <meta name="og:image" property="og:image" content={img} />
      <meta keywords={`${data.site.siteMetadata.keywords}`} />
      <meta property="og:site_name" content="Eric Pratt Web Developer" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        property="twitter:title"
        content={`${title}`}
      />
      <meta
        name="twitter:description"
        property="twitter:description"
        content={`${description}`}
      />
      <meta
        name="twitter:image"
        property="twitter:image"
        content="https://photos.app.goo.gl/FxA5iLirBhgzot9X6"
      />
      <meta name="twitter:image:alt" content="Eric Pratt Web Developer" />
      <meta name="twitter:site" content="@epratt.net" />
      <meta name="robots" content="index, follow" />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
    </Helmet>
  )
}

export default Head
