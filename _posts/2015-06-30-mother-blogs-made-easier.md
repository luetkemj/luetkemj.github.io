---
layout: post
title:  "Mother Blogs Made Easier"
date:   2015-06-30 08:54:30
categories: webdev
---

Call for beta testers!

I've been working a plugin to vastly improve the Mother Blog signup process. While I wouldn't suggest using it on a production site just yet, it's definitely ready for a wider set of eyes than just my own.

Download the plugin here: [github.com/vcualtlab/motherblog](https://github.com/vcualtlab/motherblog).

Please post any issues and feedback on github! 

##What does it do exactly?

If user is logged in and has blogs on your network:

* Create select form of blogs owned by user on your network
* Create the specified category on the child blog chosen by the user
* Add the user to the mother blog with the role subscriber
* Determine the URL for that category's RSS feed
* Add RSS feed to FeedWordPress

If user is not logged in and has blogs on your network:

* Prompt user to login

If user does not have blogs on your network but would like one:

* Provide signup link.

If user does not have blogs on your network, does not want one but has their own RSS feed:

* Provide field for submission of custom RSS feed
* Add RSS feed to FeedWordPress

If user does not have blogs on your network, does not want one, and does not have their own RSS feed:

* Tell them they need a blog somewhere and prompt them to signup on your network
