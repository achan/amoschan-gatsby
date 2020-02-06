---
title: Owning your tweets
timestamp: 2014-10-26T00:35:09-04:00
tags: ignoramos, twitter, braaands
---

If you're already using a static site generator, I don't think I need to
convince you of the importance of [being your own platform][marco]... but
here's a recap from Marco Arment:

[marco]: http://www.marco.org/2013/08/05/be-your-own-platform

> Treat places like Medium the way you’d treat writing for someone else’s
> magazine, for free. It serves the same purpose: your writing gets to appear in
> a semi-upscale setting and you might temporarily get more readers than you
> would elsewhere, but you’re giving up ownership and a lot of control to get
> that.

This excerpt was talking about blogging, but the sentiment applies for all
content that you're putting out on the web... for free. You should own it.

That's why I just added Tweet syndication to [Ignoramos][i], the [static site
generator][i] that powers this site. The idea — as discussed on [Core
Intuition][ci] — is that some of these quips that we're volunteeringly putting
on Twitter for free are things that we might be proud of. It would be a shame
to lose all that data if Twitter (or Facebook. or Ello.) were to shut down.

[i]: https://github.com/achan/ignoramos
[ci]: http://www.coreint.org/2014/10/episode-158-the-timeline-experience/

Part of the cost of owning my own identity is communicating to all these social
networks via my own platform so that I can archive them before they're
published on other networks.

With the latest version of Ignoramos, I can now tweet with the command:

```
$ ignoramos tweet "hello world!"
```

It would then post to Twitter and simultaneously create a micropost on my blog
with all the Twitter metadata stored in it. This allows me to participate in
the social networks that all my friends are on and own the data at the same
time. If Twitter were to go away, or no longer be the dominant microblogging
platform, all **my** microposts would still exist on my blog.
