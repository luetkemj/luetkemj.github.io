---
layout: post
title: "The State of Scribe"
date:   2017-02-28 09:13:30
categories: [update]
---

At every major milestone in this project I make the same mistake of thinking all the infrastructure is setup and now I can really begin.

Scribe began as a personal learning project in August of 2016. I had recently joined the FE team as a transplant from design and needed to get up to speed as quickly as possible. With a limited JS background it was important to me to have a personal project to tinker with so the most time consuming mistakes could take place on my own time rather than on the clock.

At time of writing there are now [227 commits](https://github.com/luetkemj/scribe) and [199 passing unit tests](https://travis-ci.org/luetkemj/scribe).

There were things that I knew I would need to tackle heading into this. Namely authentication. There were also concepts I didn’t realize I would have to struggle with - I’m looking at you async. But after 7 months of active dev, I’ve definitely leveled up a bit and learned a TON. I’ve also gotten a glimpse of just how much there is left to learn.

Things I have learned or gotten better at while working on scribe:

* node
* async
* mongo
* mongoose
* webpack
* cookies
* react
* redux
* mocha
* should
* express
* user auth
* CRUD
* …

The list goes on. There truly is nothing quite like actively doing a thing to learn it.

The last two big PRs were features that dealt with user creation and authentication as well as campaign management.

Next up is a whole lot of maintenance. I need to fix some bugs that have popped up and do a big dependencies upgrade as well as move to webpack 2. In addition to that there are some things that will make my life as a dev easier like actual HMR and improvements to the test app. I’d also like to implement Enzyme testing and improve some of the existing unit tests.

After that I should finally be able to implement the weather API I wrote in December as a means to avoid user auth. I had thought implementing the weather API would be simple - but it really just highlighted the need to do user auth and campaign management.

As I ponder things it has become clear that I will need some sort of digest loop for future events, like when a spell pops, or the weather changes. This digest loop is going to be a lot of fun and is another example of the extensive infrastructure that is required as this beast of a project continues to grow. So I guess that weather API isn't quite ready to be plugged in just yet...
