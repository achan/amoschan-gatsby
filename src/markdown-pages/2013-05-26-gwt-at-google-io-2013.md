---
title: GWT at Google I/O 2013
timestamp: 2014-01-26T21:28:32-04:00
tags: gwt, io2013, mvp
path: /2013/05/26/gwt-at-google-io-2013
---

With Google announcing at I/O 2012 that they were handing GWT over to a
steering committee, it was a very confusing time for companies and developers
who have invested in GWT throughout the years: Was GWT being abandoned? Would
its progress be stalled?

It was nice to see that GWT was still being used within Google as evidenced in
its two talks at Google I/O 2013.

Here’s a couple notes from the two talks:

##[Demystifying MVP and EventBus in GWT][io1]

[io1]: https://developers.google.com/events/io/sessions/331474237

Erik Kuefler (Google Wallet) talks about how Google uses the
Model-View-Presenter (MVP) pattern with GWT.

###Rich Views

 - “Display Logic” ends up being logic the developer is too lazy to test
 - Not making good use of UIBinder
 - Not testable

###Simple Views

 - Move as much display logic to the presenter and keep the view as dumb as
   possible.
 - Tedious to maintain due to lots of boilerplate code.

###Eliminating the View

 - For fairly static UIs, there’s no reason to have a wrapper class at all.
 - Combine the view and presenter into a single class.
 - Usually, this would not be testable... but Erik introduces us to
   [GWTMockUtilities][gm].

[gm]: https://github.com/gwtproject/gwt/blob/master/user/src/com/google/gwt/junit/GWTMockUtilities.java

`GWTMockUtilities.disarm();` returns `null` on `GWT.create()` instead of
crashing.

`GwtMockitoTestRunner` can remove boilerplate GWT Mockito test code.

Start with the simplest solution that works. It’s not very hard to pull an
interface out of the composite widget.

EventBus allows presenters to communicate without knowing about one another.
This improves maintainability. Use methods for tightly coupled events. Use
events for much higher level actions where

Concluding points:

 - For relatively static UIs, simple composites can be better than MVP.
 - Use an EventBus to decouple pieces of your application.
 - Define events that represent notifications, not commands.
 - Start simple and add complexity only when you need it.

##[GWT Roadmap for the Future][io2]

[io2]: (https://developers.google.com/events/io/sessions/327833110)

 - Better support for Javascript libraries
 - Full Java 7 support
 - Java 8 support (lambdas) when released by oracle
 - GWT 3.0 will remove ie6/7 support
 - Packaged apps → Easier to put GWT apps in App Store.

###What is the future of GWT?
Google developers use the technologies they are comfortable with. Some use
Dart, some use Python, Java... even GWT. There are still new internal projects
that are started up using GWT. The most notable being Google Wallet and Ad
Words.

All in all, it seems that GWT is not in danger of becoming obsolete.
