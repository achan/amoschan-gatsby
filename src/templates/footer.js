import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { IoLogoLinkedin, IoLogoTwitter, IoLogoGithub, IoIosJournal } from "react-icons/io";

const Icon = {
  linkedin: <IoLogoLinkedin className="inline" />,
  github: <IoLogoGithub className="inline" />,
  twitter: <IoLogoTwitter className="inline" />
}

const Footer = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          siteUrl
          social {
            name
            url
          }
        }
      }
    }
  `)

  const { siteMetadata: { title, social, siteUrl } } = site

  return (
    <div className="mt-32 pt-10 pb-16">
      <div className="font-sans container mx-auto px-2 max-w-xl md:max-w-2xl lg:max-w-3xl">
        <a className="text-gray-400 hover:text-gray-500 border-0 tracking-wide text-sm uppercase" href={siteUrl}>{title}</a>
        <a className="text-gray-400 hover:text-gray-500 border-0 tracking-widest text-sm uppercase" href={`${siteUrl}/blog`}>/BLOG</a>
        <nav className="text-xl">
          <ul>
            <li className="inline mr-3 my-6">
              <a className="text-gray-400 hover:text-gray-500 border-0" href={`${siteUrl}/blog`}>
                <IoIosJournal className="inline" />
              </a>
            </li>
            {
              social.map((s, i) => {
                return (
                  <li key={i} className="inline mx-3 my-6"><a className="text-gray-400 hover:text-gray-500 border-0" href={s.url}>{Icon[s.name]}</a></li>
                )
              })
            }
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Footer

