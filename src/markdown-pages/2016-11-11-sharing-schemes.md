---
title: Making Travis CI see your Xcode schemes
external_link: http://stackoverflow.com/a/16049998
timestamp: 2016-11-11T20:58:22-05:00
tags: xcode, ci, til
path: /2016/11/11/xcode-schemes
---

One of the first things I do on any new project is hook up continuous
integration. Tests that don't run continuously are not maintained and
unmaintained tests are most likely failing.

If—like me—you have trouble getting Travis to see your test scheme from Xcode,
make sure that you mark it was "Shared."

> The root cause is that the default behavior of Schemes is to keep schemes
> 'private' until they are specifically marked as shared. In the case of a
> command-line initiated build, the Xcode UI never runs and the xcoderun tool
> doesn't have its own cache of Schemes to work with. 
