---
title: Some thoughts on TDD and refactoring
timestamp: 2014-01-26T21:28:32-04:00
tags: tdd, refactoring
path: /2014/01/26/some-thoughts-on-tdd-and-refactoring
---

About a year and a half ago, I decided to dive head-first into test-driven
development. This was quite a big change for me since, up until then, I had
barely written any tests for my code. I'm by no means a testing guru now a
little over a year into TDD-ing and I'm still just moulding my opinions on what
makes tests effective and maintainable.

**Let my unit-tests become my compiler.** Coming from a Java background, the
thought of not being able to compile my code always scared me away from using
dynamically typed languages for anything too serious. Maintaining 100% code
coverage (or as close to it as possible) can act as my compiler and is actually
much more significant than just knowing my code compiles.

**Let my tests become my documentation.** Comments can get stale. Tests, in
conjunction with well named and small functions, can serve as a much better
method for me to document my code.

**Do not test privates.** Private methods are implementation specific. If my
private method is too complex, it may be a sign that I need to rip out the
logic into a dedicated class with one or more public methods that I can test.

**Refactoring is essential to writing clean code.** If I think of my code an
essay, non-refactored code is a rough draft. Writing clean code rarely (if
ever) happens after the first run. My understanding of the library/application
I'm writing changes tremendously after putting all the pieces together. Looking
back at the rough draft, I'll often find areas screaming to be refactored that
wasn't as apparent at the start. That's only natural. In fact, refactoring is a
multiple step process. After refracting, more improvements will become apparent
and I just rinse and repeat.

**Tests are essential for refactoring.** Without tests, refactoring is a
tedious process. What seems like a simple refactor can have unintended side
effects. Even more so when the refactoring is a bit more involved. I want to
have those tests in place so that I can be confident that, after refactoring,
my class still fulfills its contract.

**Tests will shape my code.** I prefer to write tests first because the tests
will ultimate shape the way I write my code. If I write tests *after* my
feature is complete, it will most likely require me to refactor my code in
order to be tested and without tests, what assurance do I have that I didn't
break any existing functionality? During the "proof-of-concept" phase I tend
not to test-drive, but as soon as I've a clear answer that my concept will
work, it start working towards that 100% test coverage.

**Work through the pain.** Make no mistake, testing is not easy in the
beginning. But the goal is that testing will become more natural and easier as
I do more of it.

Two talks that have strongly influenced my views on testing and refactoring are
[The Magic Tricks of Testing][mt] by Sandi Metz and [Therapeutic
Refactoring][tr] by Katrina Owens.

[mt]: http://www.youtube.com/watch?v=URSWYvyc42M
[tr]: http://confreaks.com/videos/1071-cascadiaruby2012-therapeutic-refactoring
