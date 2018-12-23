---
layout: post
title:  "Canned Analytics with Benson Stats"
date:   2015-07-08 11:48:30
categories: webdev
illustration: "/assets/posts/150708/illustration.png"
---
<!--
Having spent a fair amount of time recently tinkering with Mother Blogs it became apparent that another challenge we faced was the ability to provide any sort of meaningful analysis of the data we were collecting. That data is important. Fat lot of good that data'll do you when it's locked up in the database.
 -->

Having spent a fair amount of time recently tinkering with Mother Blogs it became apparent that another challenge we face is the ability to provide any sort of meaningful analysis of the data we are collecting. We have plenty of course content from students for grading and assessment but it's locked in stubborn wordpress databases accessable only through generic and clunky interfaces not designed to do what we're asking.

So I took a stab at unlocking that data for David Croteau's Sociology course here at VCU. Two seperate implementations below:

* [Blogs View](http://rampages.us/grandma-socy/blogs-view/)
* [Conversation View](http://rampages.us/grandma-socy/conversation-view/)

## So what do we have here?

Sorting by author is now possible as shown here:

![sort by author](https://i.imgur.com/QUOIKwZ.gifv)

Some things to note. First we count all blog posts on the mother blog, then we count our results based on author and or keyword search. Finally we do a quick calculation to get the percentage of our results from the entire activity across all of our student's blogs.

When searching per student this is a quick and easy way of getting a count of their contributions and how they relate to the rest of the group in terms of productivity. Links to each post provide easy access to the full content allowing for proper assessment or further engagement.

We can also search by keyword.

![sort by keyword](https://i.imgur.com/uACit7X.gifv)

When searching by keyword our analytics are the same but can provide some very different and very valuable insights. We see here that of the 184 blog posts we have 5 that contain the word "confederate". This is very likely due to the prominence of the subject in the news recently and VCU's location in particular.


## how does this work?

First I aggregated all the posts and comments from David's students into this one site. Then I added [Benson](https://github.com/VCUarts/benson) and [WP-API](https://wordpress.org/plugins/json-rest-api/). Benson is a utility plugin I built at VCUarts to create an Angular controller and add a JSON feed into $scope making Angular templates in wordpress a piece of cake. Finally I started [Benson Stats](https://github.com/vcualtlab/bensonstats) yesterday which aims to provide canned analytics such as this via shortcode. More cans coming soon :)

So while this is a series of plugins taped together to provide somewhat complex functionality the workflow itself isn't actually that complex.

To implement this on your own site you can do the following:

1. Aggregate your content.<br/>
   I suggest having a category for blog posts and category for comments.
   [ALT Lab MotherBlog](https://github.com/vcualtlab/motherblog) and [FeedWordPress](https://wordpress.org/plugins/feedwordpress/) can help with that.
1. Some plugins you will need ti install<br/>
   [WP-API](https://wordpress.org/plugins/json-rest-api/)<br/>
   [Advanced Custom Fields](http://www.advancedcustomfields.com/) (required by benson, for now at least)<br/>
   [Benson](https://github.com/VCUarts/benson)<br/>
   [Benson Stats](https://github.com/vcualtlab/bensonstats)
1. Find an appropriate endpoint for the content you want to sift through.<br/>
   ex. http://yoursite.com/wp-json/posts?filter[category_name]=blog-posts<br/>
   see [wp-api.org](http://wp-api.org/) for more info on building endpoints
1. Add the shortcode [sifter] to a post or page per the Benson Stats documentation on [github](https://github.com/vcualtlab/bensonstats).


## beyond the mother blog

This was all created as way to understand the data on our Mother Blogs better but it doesn't need stop there. This could provide meaningful data of a personal blog or even serve as a way to find duplicate content and site creep on a large install.

Lots more cans coming soon, so much data to sort!
