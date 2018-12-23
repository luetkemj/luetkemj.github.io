---
layout: post
title:  "List Remote Comments"
date:   2015-06-10 10:27:30
categories: webdev
illustration: "/assets/posts/list-remote-comments/taking-notes.png"
---

Dropped a new plugin yesterday. Learned a bunch of stuff in the process.

Faculty are using FeedWordPress to run their courses at VCU and elsewhere. The general setup is a Mother > Child blog relationship. Faculty run a mother blog that pulls in posts from their student’s child blogs based on categories relevant to specific assignments.

The theory in this pedagogy all depends on student engagement and interaction via comments on each other’s articles. The difficulty here is that FeedWordPress works off RSS feeds and the feed that contains posts doesn’t contain those comments. As a result faculty find it difficult/impossible to keep track of who is commenting where and how much. Assessing success in this setup has proven very difficult.

Martha Burtis wrote a [nice simple plugin](http://wrapping.marthaburtis.net/2014/03/25/remote-comments-plugin-a-fwp-addon/) to get the comments count for remote posts. This is nice in that it will show the most popular/controversial posts by comment count but it doesn’t quite satisfy our goals. What we need is a 1000ft view of the conversation. The ability to see a list of posts from students along with the names of commenters and links out to all of this content on the child blogs.

Martha’s plugin does a good job of finding the rss for comments on each post. That being the primary key to my problem I figured it was a good place to start.

I spent Tuesday afternoon cracking open Remote Comments to see if I could reconfigure it to grab more than just the comments number. After a lot of digging into our own workflows and those of others I ended up with [List Remote Comments](https://github.com/vcualtlab/list-remote-comments).

In development, my first goal is always a working prototype. Roughly hewn edges can be sanded out so long as the thing works in the first place. The first step towards this is usually some sort of crude template tag that gets the job done.

Based on Martha’s work getting to the prototype state was surprisingly quick. The data was there, I just needed to spit it out with some [SimplePie](http://simplepie.org/)* functions. Use this tag in the loop and you’re good to go!

**Except you can’t do that here.**

When you are dealing with thousands of users picking their own themes you can’t expect to start dropping custom templates all over the place when you need to modify a query or drop a couple template tags into the loop. [Tom](http://bionicteaching.com/) has been handling this with [Bill Erickson’s](http://www.billerickson.net/) excellent [Display Posts Shortcode](https://wordpress.org/plugins/display-posts-shortcode/). It allows you to spit out custom queries without getting into the theme weeds. Perfect for this environment.

**Not quite.**

Again with the caveats - I needed to spit out a template tag on the loops that Display Posts is running. But of course you can’t just do that without modifying the plugin. Except you can! Bill has done a fantastic job of making his plugin super extendable with some sweet filters. All I needed to do was appended the output of my template to the output of Bill’s loop. Success!

**Almost.**

The problem now was my template tag appended everywhere Display Posts was used. I really only needed it on specific pages. I tried adding extra arguments to Bill’s shortcode but WordPress ignores any arguments that aren't explicitly coded in. I thought about hi-jacking some of his existing arguments but that’s hacky and not terribly user friendly. Eventually I settled on providing my own shortcode that when placed above the display posts shortcode runs a quick function that adds the filter.

{% highlight php startinline=true %}

function append_to_be_posts( $output ) {
	$output .= list_remote_comments();
	return $output;
}

add_shortcode( 'list-remote-comments', 'append_remote_comments_to_be_posts_shortcode', 9 );

function append_remote_comments_to_be_posts_shortcode(){
	add_filter( 'display_posts_shortcode_output', 'append_to_be_posts', 9 );
}

{% endhighlight %}

**Now we’re up and running!**

The last few things things to do at this point were to provide a set of arguments to the template tag should you be in an environment where that sort of workflow is acceptable and also to get some serious caching involved.

The one final gigantic caveat to this whole thing is how much of a bottle neck it can be. We are reading, parsing, and outputting data from 10, 20, 30, or even more rss feeds. I’ve got caching setup to only check once an hour but I think we could get even more aggressive. Alan Lavine from [CogDogBlog](http://cogdogblog.com/) suggested hooking into FeedWordPress itself to see about running things through there. A chron job is also an option. I’ll need to test further to see if any of these really solve this last problem.

Eventually I’d like to try my hand at getting all this data from the WP-API. Working with JSON feeds can be a lot simpler - or not - depending on all sorts of other variables I have yet to encounter.

Who knew reading some comments could get so complicated!

[Get the List Remote Comments](https://github.com/vcualtlab/list-remote-comments) plugin and full documentation on github.


<div class="meta" markdown="1" >

#### Notes

*I'm not actually sure how or why I have access to SimplePie functions here. Part of WordPress or FeedWordPress? More investigation needed...

</div>
