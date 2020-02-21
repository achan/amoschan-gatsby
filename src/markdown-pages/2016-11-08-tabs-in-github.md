---
title: Setting the default tab size for your Github repository
external_link: http://stackoverflow.com/a/33831598
timestamp: 2016-11-08T09:25:18-05:00
tags: github, tabsvsspaces, swift
path: /2016/11/08/tabs-in-github
---

As a new convert to tabs in the Tabs vs. Spaces war, my immediate concern was
how my code would look in GitHub 👀. It turns out that GitHub respects the
`.editorconfig` file used by JetBrains, allowing us to set up the default tab
size with the following:

.editorconfig:

    [*.swift]
    indent_style = tab
    indent_size = 2
