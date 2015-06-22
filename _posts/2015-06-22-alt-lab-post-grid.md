---
layout: post
title:  "ALT Lab Post Grid"
date:   2015-06-22 14:50:30
categories: webdev
illustration: "/assets/posts/150622/masonry.png"
---
<img class="hidden" src="{{ page.illustration }}" />


Until now grid layouts on Rampages have been handled via a combination of styles thrown in widgets, scripts in meta boxes, and the Display Posts Shortcode that inexplicably doesn't support pagination, strips theme styles, and doesn't provide any sort of default for the CSS challenged among us. Let's just say it's been rather... unintuitive.

[ALT Lab Post Grid](https://github.com/vcualtlab/postgrid) aims to provide a super simple entry to masonry layouts while providing some relatively powerful options for customization. To get started all you have to do is install the plugin and paste a single shortcode onto any post or page. 

{% highlight html %}
[altlab-postgrid]
{% endhighlight %}


Out of the box you get a paginated 3 column masonry layout for the most recent 15 posts on your site.

Simple enough. But rarely are our needs ever quite that simple.

The shortcode accepts a healthy set of attributes designed to cover most everything you might need. You can use any registered post type, pull from specific categories or tags, set posts per page, choose not to use pagination at all, thumbnails, excerpts, content, title, permalink, author, date, maximum column count, light or dark default theme, no theme with basic layout styling, or no styling at all.

The query options here are nowhere near as robust as those in Display Posts Shortcode but this is primarily a layout plugin for a specific need here at VCU.

You can read the full docs and download the plugin over on the [repo](https://github.com/vcualtlab/postgrid).

And a couple sightings in the wild:

* [http://rampages.us/camh3/blogs/twitpics/](http://rampages.us/camh3/blogs/twitpics/)
* [http://rampages.us/research/student-blogs/dr-wibberly/](http://rampages.us/research/student-blogs/dr-wibberly/)