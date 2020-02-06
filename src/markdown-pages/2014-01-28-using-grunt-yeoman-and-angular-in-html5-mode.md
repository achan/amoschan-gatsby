---
title: Updating the Gruntfile from Yeoman to support AngularJS in HTML5 mode
tags: grunt, yeoman, angularjs, html5
timestamp: 2014-01-28T04:47:22-04:00
---

Supporting Angular's [HTML5 mode][h] is straightforward. What gets a little
trickier is updating the Gruntfile provided by Yeoman.

[h]: http://docs.angularjs.org/guide/dev_guide.services.$location

Enabling HTML5 mode in Angular is telling the framework to use the HTML5
History API to push and pop history states. This allows single-page
applications to have traditional URLs that do not include a hash or hashbang.
When navigating the app, the browser looks like it's going to new pages when in
reality Angular's router is processing the state change and showing a new view.
This all works while you're within your application, however, once you refresh
the app or come back to it from an external site, the server no longer knows
how to render your application.

The solution is to have a set of rewrite rules on your web server that will
redirect the user back to index.html. You can do this easily with [Express][e],
[Nginx][n], [Apache][a] and most modern web servers.

[e]: https://github.com/tinganho/connect-modrewrite/issues
[n]: http://wiki.nginx.org/HttpRewriteModule
[a]: http://httpd.apache.org/docs/current/mod/mod_rewrite.html

If you're using Yeoman's [Angular generator][ga], you'll want to add an
[Express middleware][em] to your Gruntfile so that your rewrite rules are
loaded when you call `grunt serve`.

[ga]: https://github.com/yeoman/generator-angular
[em]: https://github.com/tinganho/connect-modrewrite/issues

### Installing rewrite rules via Grunt:

install connect-modrewrite

    npm install connect-modrewrite --save-dev

add Express middleware to the `connect:livereload` task of your Gruntfile

    connect: {
      options: {
        base: [
          '<%= yeoman.app %>'
        ]
      },
      livereload: {
        options: {
          middleware: function (connect, options) {
            var modRewrite = require('connect-modrewrite');
            var middlewares = [
              modRewrite(['^/r/(.*)$ /index.html [L]'])
            ];
            options.base.forEach(function (base) {
              middlewares.push(connect.static(base));
            });

            return middlewares;
          }
        }
      }
    }

commit: [0746ac6b93][ci]

[ci]: https://github.com/achan/toomuchreddit/commit/0746ac6b93c6dd008639fb74bbeb79b73c6b16ce
