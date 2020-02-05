import React from "react";
import ReactMarkdown from "react-markdown"
import avatar from "./avatar.jpg"
import styled from "styled-components"

const Description = styled.div`
  a {
    border-bottom: 1px dotted currentColor;
  }

  p {
    margin-top: 0.5rem;
  }
`

function IndexPage() {
  const overview = {
    title: "Hire Me",
    body: `
I help small companies and entrepreneurs build their products from the
ground up.  From feature development to leading a team of developers, I
work with my clients to make their vision a reality. **Currently only
available for 10-15 hours per week.**
`
  }

  const experience = [
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
  ]

  const footer = `
For a full list of experience with technologies like Swift, Ruby on Rails,
React, Ember and more, see [my profile on
LinkedIn](https://www.linkedin.com/in/amoschan).
`

  return (
    <div className="container mx-auto px-2 max-w-xl md:max-w-2xl text-gray-700">
      <div className="flex flex-row items-center mt-5 mb-10">
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
        <ReactMarkdown className="mt-2 text-lg sm:text-xl md:text-2xl" source={overview.body} />
      </div>
      <div className="mt-8">
        <h2 className="bg-indigo-300 text-gray-100 text-xs px-2 py-1 rounded uppercase tracking-wider inline">
          Past Experience
        </h2>
        {experience.map((job, index) => {
          return (
            <div key={index} className="mb-10 last:mb-10">
              <h3 className="mt-2 font-bold text-xl md:text-2xl font-serif">
                {job.company}, <span className="italic text-gray-600">{job.title}</span> 
              </h3>
              <div className="text-sm md:text-base text-gray-500 tracking-wide">{job.tenure}</div>
              <Description>
                <ReactMarkdown className="mt-2 md:text-lg" source={job.description} escapeHtml={false} />
              </Description>
              <div className="mt-2">
                {job.tags.map(t => <span className="bg-gray-400 text-white text-xs md:text-sm mr-2 px-2 py-1 rounded-full tracking-wide" key={t}>#{t}</span>)}
              </div>
            </div>
          )
        })}
        <Description className="text-sm md:text-base text-gray-500 italic">
          <ReactMarkdown className="my-10" source={footer} escapeHtml={false} />
        </Description>
      </div>
      <div className="my-20 text-4xl text-center">👨‍💻</div>
    </div>
  );
}

export default IndexPage;
