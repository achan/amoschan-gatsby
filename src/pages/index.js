import Footer from "../templates/footer"
import React from "react";
import ReactMarkdown from "react-markdown"
import avatar from "./avatar.jpg"
import { Link } from "gatsby"

const Paragraph = ({ children }) => <p className="mb-3 md:mb-6 lg:mb-8 md:text-lg lg:text-xl last:mb-0">{children}</p>

function IndexPage() {
  const { overview, experience, footer } = data
  const renderers = { paragraph: Paragraph }

  return (
    <div className="border-t-2 border-indigo-500 bg-white">
      <div className="font-sans container mx-auto px-2 max-w-xl md:max-w-2xl lg:max-w-3xl text-gray-700">
        <div className="flex flex-row items-center pt-5 mb-10">
          <img src={avatar} className="w-20 h-20 rounded-full" />
          <div className="flex flex-col text-xl md:text-2xl hover:text-indigo-500 ml-4 align-center">
            <div>Hey! 👋</div>
            <div>I&apos;m <span className="font-semibold">Amos Chan</span>.</div>
          </div>
        </div>
        <div>
          <h1 className="bg-indigo-500 text-gray-100 text-xs px-2 py-1 rounded uppercase tracking-wider inline">
            {overview.title}
          </h1>
          <ReactMarkdown className="mt-2 text-xl sm:text-2xl md:text-3xl font-light" source={overview.body} />
        </div>
        <div className="mt-20">
          <h2 className="bg-indigo-300 text-gray-100 text-xs px-2 py-1 rounded uppercase tracking-wider inline">
            Past Experience
          </h2>
          {experience.map((job, index) => {
            return (
              <div key={index} className="mb-10 last:mb-10">
                <h3 className="mt-2 font-bold text-xl md:text-2xl">
                  {job.company}, <span className="italic text-gray-600 font-light">{job.title}</span> 
                </h3>
                <div className="text-sm md:text-base text-gray-500 tracking-wide">{job.tenure}</div>
                <ReactMarkdown className="mt-2 md:text-lg" source={job.description} escapeHtml={false} renderers={renderers} />
                <div className="mt-2">
                  {
                    job.tags.map(tag => (
                      <Link
                        to={`/tags#${tag}`}
                        className="bg-gray-400 text-white text-xs md:text-sm mr-2 px-2 py-1 rounded-full tracking-wide hover:text-white hover:bg-gray-500 border-0"
                        key={tag}>
                        #{tag}
                      </Link>
                    ))
                  }
                </div>
              </div>
            )
          })}
          <ReactMarkdown className="my-10" source={footer} escapeHtml={false} />
        </div>
        <div className="my-20 text-4xl text-center">👨‍💻</div>
      </div>
      <Footer />
    </div>
  );
}

const data = {
  overview: {
    title: "Hire Me",
    body: `
I help small companies and entrepreneurs build their products from the
ground up.  From feature development to leading a team of developers, I
work with my clients to make their vision a reality. **Currently only
available for 10-15 hours per week.**
`
  },
  experience: [
    {
      company: "Flexday",
      title: "Consultant",
      tags: ["swift", "react", "firebase"],
      tenure: "2018 - present",
      description: `
Remote work is the future and Flexday provides its members with a network of
[unique, fully-equipped coworking spaces](https://www.theglobeandmail.com/canada/toronto/article-toronto-startup-flexday-partners-with-restaurants-to-turn-empty-tables/).

I lead the development of their iOS app, web app and help out on their backend.
`
    },
    {
      company: "Code Academy",
      title: "Consultant",
      tags: ["react", "rubyonrails", "graphql"],
      tenure: "2018 - present",
      description: `Working with a young entrepreneur, we’re building an <abbr title="Learning Management System">LMS</abbr> that’s primarily focused on the developing world.`
    },
    {
      company: "VarageSale",
      title: "Engineering Team Lead",
      tags: ["rubyonrails", "swift"],
      tenure: "2014 - 2019",
      description: `
Facebook Marketplace before Facebook Marketplace. I joined a small team working
on its Rails app and saw our work lead to a
[$34 million Series B funding](https://www.theglobeandmail.com/report-on-business/small-business/sb-money/varagesale-app-raises-34-million-from-silicon-valley-investors/article23772596/).

I pivoted over to iOS development to eventually lead the iOS team until its
[acquisition by VerticalScope](http://www.montrealintechnology.com/montreal-founded-varagesale-acquired-by-verticalscope/)
where I became the engineering team lead responsible for VarageSale‘s
iOS, Android and web products.
`
    }
  ],
  footer: `
For a full list of experience with technologies like Swift, Ruby on Rails,
React, Ember and more, see [my profile on
LinkedIn](https://www.linkedin.com/in/amoschan).
`
}

export default IndexPage;
