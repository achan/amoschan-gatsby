---
title: "Rebuilding the Shopify Admin: Improving Developer Productivity by Deleting 28,000 lines of JavaScript"
timestamp: 2014-10-28T22:41:22-04:00
tags: javascript, rails, node
external_link: http://www.shopify.com/technology/15646068-rebuilding-the-shopify-admin-improving-developer-productivity-by-deleting-28-000-lines-of-javascript
path: /2014/10/28/shopify-js-to-rails
---

> Possibly the greatest difficulty of all was the burden of successfully
> maintaining two separate tech stacks, with a great amount of duplication
> between the two. Models needed to be represented both in Rails and in Batman,
> and both had to be tested. Business logic was leaking into the client-side
> rather than being isolated to the server side, or would be duplicated in both.
> When we added additional mobile and point-of-sale clients to our offerings, any
> business logic isolated to the client-side had to be duplicated in these new
> clients as well. In cases where business logic was duplicated across different
> sides of the software, it would become ambiguous as to what was the correct or
> intended implementation.

DOM Hell aside, I think most of the business logic duplication would have been
eliminated if Shopify had a Node back-end. Regardless the choice of back-end,
this problem exists once you want to support multiple front-ends (ie. iOS,
Android and web).

> Because we chose a solution wherein simplicity and developer approachability
> was paramount, we were able to split work across many different teams - a
> luxury that was not previously possible. This resulted in rapid completion of
> the project, especially in comparison to the previous version, which had
> endured constantly moving goal posts.

I really think this is the main takeaway of why Rails is a good choice. There's
still no full-stack framework that handles "developer approachability" on its
level.
