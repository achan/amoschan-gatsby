---
title: Running iOS integration tests on Travis
external_link: https://github.com/openmcac/fisherhallclient-swift/pull/1
timestamp: 2016-11-12T14:27:20-05:00
tags: ci, swift
path: /2016/11/12/adding-tests-on-travis
---

[When programming loses its elegance...][gh] Also, a great use case for
GitHub's "squash and merge" button.

[gh]: https://github.com/openmcac/fisherhallclient-swift/pull/1

The biggest obstacle was understanding why Travis was complaining that it had
no eligible devices to run my tests. Even though I could clearly see that it had
iPhone SE simulators running iOS 10, it kept giving me this error:

    xcodebuild: error: Unable to find a destination matching the provided destination specifier:
        { platform:iOS Simulator, OS:10.0, name:iPhone SE }
      Ineligible destinations for the "FisherHallClientTests" scheme:
        { platform:iOS, id:dvtdevice-DVTiPhonePlaceholder-iphoneos:placeholder, name:Generic iOS Device }
        { platform:iOS Simulator, id:dvtdevice-DVTiOSDeviceSimulatorPlaceholder-iphonesimulator:placeholder, name:Generic iOS Simulator Device }

The reason was because my deployment target was iOS 10.1. Travis is using Xcode
8, which only has iOS 10.0 devices. Obvious in retrospect.
