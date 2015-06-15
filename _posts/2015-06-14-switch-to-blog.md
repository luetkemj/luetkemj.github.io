---
layout: post
title:  "switch_to_blog();"
date:   2015-06-14 10:27:30
categories: webdev
illustration: "/assets/posts/switch-to-blog/full-switchboard.png"
---

<img class="hidden" src="{{ page.illustration }}" />

On Friday Tom and I had a long conversation on the mother blog setup we create for most of our online courses. Configuration is completely unintuitive and faculty hoping to set this up inevitably need to schedule a sitdown with us to figure it out. 

Probably the biggest sticking point is subscribing students to the mother blog. Currently this is handled by creating a gravity form to collect, among other things, an RSS feed from the student's blog. Even if the students are successfull in finding and submitting the url to their feed the faculty has to parse the data from a gravity form and manually enter it into FeedWordPress.

Our goal then, is to create a theme, plugin, or both that will greatly improve this subscription workflow.

From our discussion that workflow would look something like this:

	if ( is_logged_in() ){
	
		Hello [Student Name],

		Which blog would you like to subscribe this class to?

			[ ] Student Blog 1
			[X] Student Blog 2
			[ ] Student Blog 3

		Student Blog 2 does not have the category [course-category] yet. Would you like us to create it for you?

			[X] Yes
			[ ] No thanks, I'll do it myself.

		[create course-category on Student Blog 2]

		You're all set set. Subscribe?

			[X] Yes
			[ ] Nope, I changed my mind.

		[combine url and category data from choices to build a proper feed url and create the feed in FeedWordPress]

	} else {
		
		Prompt sign in, signup, or workflow to submit a feed from another source.

	}

On Friday I knew or at least had a lead on how to do everything in that workflow except for creating a category on Student Blog 2. I spent a fair amount of time Friday afternoon and this weekend digging around for answers and posting on various forums looking for an answer. Never got a response. Apparently this is not a common problem.

Creating a category on a blog is no big deal, the difficulty here came in that I was trying to do it on another blog in the network. I had no way of passing a blog id in any of the functions I had found that could presumably accomplish this task. The only way to create a category on a blog was from the blog itself. 

Which is exactly where ```switch_to_blog();``` comes in. It will (as far as wordpress is concerned) switch you to anyother blog on the network allowing you to create a category on whatever blog you want. Then you just switch back and hey presto - job's done.

<script src="https://gist.github.com/luetkemj/a8a0b317cb58ed5ec136.js"></script>


Super excited to have this hurdle out of the way. 

Now to build that workflow...

